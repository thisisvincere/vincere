/* SASSO — concept site behavior. Vanilla, no dependencies.
   1. Hours: one table drives the hero status line and the "today" row.
   2. Nav: hairline once the page has scrolled.
   3. Reveals: sections rise once on scroll.
   4. Reserve form: validation and a demo confirmation (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal (21.5 = 9:30 pm).
     ---------------------------------------------------------------------- */
  var HOURS = {
    0: [16, 21],     // Sunday
    1: null,         // Monday — closed
    2: [17, 22],
    3: [17, 22],
    4: [17, 22],
    5: [17, 23],
    6: [17, 23]
  };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var ADDRESS = '412 Wickenden St';

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
  }

  function nextOpening(now) {
    for (var i = 1; i <= 7; i++) {
      var d = (now.getDay() + i) % 7;
      if (HOURS[d]) return { day: i === 1 ? 'tomorrow' : DAYS[d], at: HOURS[d][0] };
    }
    return null;
  }

  function status(now) {
    var day = now.getDay();
    var t = now.getHours() + now.getMinutes() / 60;
    var today = HOURS[day];

    if (today && t >= today[0] && t < today[1]) {
      var closingSoon = today[1] - t <= 1;
      return { open: true, text: (closingSoon ? 'Open · kitchen closes soon' : 'Open tonight until ' + fmt(today[1])) };
    }
    if (today && t < today[0]) {
      return { open: false, text: 'Opens today at ' + fmt(today[0]) };
    }
    var next = nextOpening(now);
    return { open: false, text: next ? 'Closed now · opens ' + next.day + ' at ' + fmt(next.at) : 'Closed' };
  }

  (function hours() {
    var line = document.querySelector('[data-status]');
    var rows = document.querySelectorAll('[data-hours] tr[data-day]');
    var now = new Date();

    if (line) {
      var s = status(now);
      line.textContent = s.text + ' · ' + ADDRESS;
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
    var targets = document.querySelectorAll('.fact, .story__media, .story__copy, .menu__head, .menu__photos, .course, .visit__copy, .hours, .reserve__copy, .form');
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
     4. RESERVE FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the reservation system's endpoint.
     ---------------------------------------------------------------------- */
  (function reserve() {
    var form = document.getElementById('reserve-form');
    if (!form) return;
    var statusEl = document.getElementById('reserve-status');
    var dateEl = document.getElementById('r-date');

    // Earliest bookable date is today.
    var today = new Date();
    var iso = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    dateEl.min = iso;

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
      if (input === dateEl && v) {
        var d = new Date(v + 'T12:00:00');
        if (!HOURS[d.getDay()]) return false;      // closed that day
        if (v < iso) return false;                  // in the past
      }
      if (input.type === 'tel' && v.replace(/\D/g, '').length < 10) return false;
      return true;
    }

    var inputs = Array.prototype.slice.call(form.querySelectorAll('input[required], select[required]'));
    inputs.forEach(function (input) {
      input.addEventListener('blur', function () { if (input.value) setError(input, !valid(input)); });
      input.addEventListener('input', function () { if (fieldOf(input).classList.contains('is-invalid')) setError(input, !valid(input)); });
    });

    function send(data) {
      // Demo: resolve after a short delay. Live: POST to the reservation system.
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
        name: document.getElementById('r-name').value.trim(),
        date: new Date(dateEl.value + 'T12:00:00'),
        time: document.getElementById('r-time').value,
        party: document.getElementById('r-party').value
      };

      send(data).then(function () {
        var when = DAYS[data.date.getDay()] + ' at ' + data.time;
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Thanks, ' + data.name.split(' ')[0] + '. Table for ' + data.party + ' on ' + when + ' requested. We’ll confirm by text within the hour.';
        statusEl.focus && statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
