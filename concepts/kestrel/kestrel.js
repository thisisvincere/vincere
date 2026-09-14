/* KESTREL PLUMBING & HEATING — concept site behavior. Vanilla, no dependencies.
   1. Hours + dispatch board: one table drives the hero status line and the "today" row.
   2. Nav: hairline once the page has scrolled.
   3. Reveals: sections rise once on scroll.
   4. Quote form: validation and a demo confirmation (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal (19 = 7 pm).
     ---------------------------------------------------------------------- */
  var HOURS = {
    0: null,          // Sunday — emergency line only
    1: [7, 19],
    2: [7, 19],
    3: [7, 19],
    4: [7, 19],
    5: [7, 19],
    6: [8, 16]
  };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var TOWN = 'Fort Collins';
  var LAST_DISPATCH_BEFORE_CLOSE = 1;   // no scheduled truck rolls in the last hour

  /* A fictional dispatch board: four trucks, their booked jobs as [start, end] blocks in
     decimal hours. Demonstration data: on a live site this comes from dispatch software. */
  var TRUCKS = {
    1: [[7, 9.5], [10, 13], [14, 17.5]],
    2: [[7, 11], [11.5, 15], [16, 19]],
    3: [[8, 10], [10.5, 12], [13.5, 18.5]],
    4: [[7.5, 12.5], [13, 15], [15.5, 17]]
  };

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
  }

  function nextOpenDay(now) {
    for (var i = 1; i <= 7; i++) {
      var d = (now.getDay() + i) % 7;
      if (HOURS[d]) return { day: i === 1 ? 'tomorrow' : DAYS[d], at: HOURS[d][0], key: d };
    }
    return null;
  }

  /* Earliest free half-hour slot across the trucks on a weekday, at or after `from`. */
  function nextTruck(dayKey, from) {
    var open = HOURS[dayKey];
    if (!open) return null;
    var best = null;
    Object.keys(TRUCKS).forEach(function (id) {
      var t = Math.max(open[0], Math.ceil(from * 2) / 2);
      var last = open[1] - LAST_DISPATCH_BEFORE_CLOSE;
      var blocks = TRUCKS[id];
      while (t <= last) {
        var busy = false;
        for (var i = 0; i < blocks.length; i++) {
          if (t >= blocks[i][0] && t < blocks[i][1]) { busy = true; t = blocks[i][1]; break; }
        }
        if (!busy) { if (best === null || t < best) best = t; return; }
      }
    });
    return best;
  }

  function status(now) {
    var day = now.getDay();
    var t = now.getHours() + now.getMinutes() / 60;
    var today = HOURS[day];

    if (today && t >= today[0] && t < today[1]) {
      var slot = nextTruck(day, t);
      var truckText = slot === null ? 'trucks booked today, emergency line open'
        : (slot - t <= 0.5 ? 'a truck can roll now' : 'next truck ' + fmt(slot));
      return { open: true, text: 'Open now · ' + truckText };
    }
    if (today && t < today[0]) {
      var first = nextTruck(day, today[0]);
      return { open: false, text: 'Opens at ' + fmt(today[0]) + (first !== null ? ' · first truck ' + fmt(first) : '') + ' · emergency line open' };
    }
    var next = nextOpenDay(now);
    var firstNext = next ? nextTruck(next.key, next.at) : null;
    return { open: false, text: 'After hours · emergency line open' + (next ? ' · next scheduled truck ' + next.day + ' ' + fmt(firstNext !== null ? firstNext : next.at) : '') };
  }

  (function hours() {
    var line = document.querySelector('[data-status]');
    var rows = document.querySelectorAll('[data-hours] tr[data-day]');
    var now = new Date();

    if (line) {
      var s = status(now);
      line.textContent = s.text + ' · ' + TOWN;
      line.classList.toggle('is-closed', !s.open);
    }
    rows.forEach(function (row) {
      if (Number(row.getAttribute('data-day')) === now.getDay()) row.classList.add('is-today');
    });
  })();

  /* ----------------------------------------------------------------------
     2. NAV
     ---------------------------------------------------------------------- */
  (function nav() {
    var el = document.querySelector('[data-nav]');
    if (!el) return;
    var update = function () { el.classList.toggle('is-stuck', window.scrollY > 24); };
    window.addEventListener('scroll', update, { passive: true });
    update();
  })();

  /* ----------------------------------------------------------------------
     3. REVEALS
     ---------------------------------------------------------------------- */
  (function reveals() {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.urgent__inner, .prices__head, .group, .how__copy, .how__photo, .area__copy, .hours, .about__media, .about__copy, .quote__copy, .form');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  })();

  /* ----------------------------------------------------------------------
     4. QUOTE FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the dispatch software's endpoint.
     ---------------------------------------------------------------------- */
  (function quote() {
    var form = document.getElementById('quote-form');
    if (!form) return;
    var statusEl = document.getElementById('quote-status');

    function fieldOf(input) { return input.closest('.field'); }
    function setError(input, on) {
      var f = fieldOf(input);
      var err = f.querySelector('.field__error');
      f.classList.toggle('is-invalid', on);
      if (err) err.hidden = !on;
      input.setAttribute('aria-invalid', on ? 'true' : 'false');
      if (err) input.setAttribute('aria-describedby', on ? err.id : '');
    }
    function valid(input) {
      var v = input.value.trim();
      if (input.required && !v) return false;
      if (input.type === 'tel' && v.replace(/\D/g, '').length < 10) return false;
      return true;
    }

    var inputs = Array.prototype.slice.call(form.querySelectorAll('input[required], select[required]'));
    inputs.forEach(function (input) {
      input.addEventListener('blur', function () { if (input.value) setError(input, !valid(input)); });
      input.addEventListener('input', function () { if (fieldOf(input).classList.contains('is-invalid')) setError(input, !valid(input)); });
      input.addEventListener('change', function () { if (fieldOf(input).classList.contains('is-invalid')) setError(input, !valid(input)); });
    });

    function send(data) {
      // Demo: resolve after a short delay. Live: POST to dispatch software.
      return new Promise(function (resolve) { setTimeout(function () { resolve(data); }, 700); });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      inputs.forEach(function (input) {
        var ok = valid(input);
        setError(input, !ok);
        if (!ok && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      var btn = form.querySelector('[data-submit]');
      var label = form.querySelector('[data-submit-label]');
      btn.disabled = true;
      label.textContent = 'Sending…';

      var data = {
        name: document.getElementById('q-name').value.trim(),
        zip: document.getElementById('q-zip').value.trim(),
        issue: document.getElementById('q-issue').value,
        when: document.getElementById('q-when').value
      };

      send(data).then(function () {
        var first = data.name.split(' ')[0];
        var urgent = /emergency/i.test(data.when);
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = urgent
          ? 'Thanks, ' + first + '. Emergency logged for ' + data.zip + ' — the on-call tech is calling you back in the next few minutes. If you don’t hear from us in ten, call (970) 555-0147.'
          : 'Thanks, ' + first + '. We’ll text a flat price for the ' + data.issue.toLowerCase() + ' at ' + data.zip + ' within the hour. If it can’t wait, call (970) 555-0147.';
        statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
