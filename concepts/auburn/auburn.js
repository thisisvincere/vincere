/* AUBURN & ASH — concept site behavior. Vanilla, no dependencies.
   1. Hours: one table drives the hero status line (with the walk-in cutoff) and the "today" row.
   2. The chair: menu rows and stylist cards carry their service / stylist into the form.
   3. Nav: hairline once the page has scrolled.
   4. Reveals: sections rise once on scroll.
   5. Booking form: validation and a demo confirmation (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal (19 = 7 pm).
     ---------------------------------------------------------------------- */
  var HOURS = {
    0: null,          // Sunday — closed
    1: null,          // Monday — closed
    2: [10, 19],
    3: [10, 19],
    4: [10, 19],
    5: [10, 19],
    6: [9, 17]
  };
  var WALK_IN_UNTIL = 17;      // walk-ins taken until 5 pm
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var STREET = 'Haywood Rd';
  var FROM_SERVICES = ['Single-process color', 'Balayage', 'Partial highlights'];   // priced "from"; exact number at the consult

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
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
      var cutoff = Math.min(WALK_IN_UNTIL, today[1]);
      var walkins = t < cutoff ? 'walk-ins until ' + fmt(cutoff) : 'booked chairs only tonight';
      return { open: true, text: 'Open today until ' + fmt(today[1]) + ' · ' + walkins };
    }
    if (today && t < today[0]) {
      return { open: false, text: 'Opens at ' + fmt(today[0]) + ' · walk-ins until ' + fmt(Math.min(WALK_IN_UNTIL, today[1])) };
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
      line.textContent = s.text + ' · ' + STREET;
      line.classList.toggle('is-closed', !s.open);
    }
    rows.forEach(function (row) {
      if (Number(row.getAttribute('data-day')) === now.getDay()) row.classList.add('is-today');
    });
  })();

  /* ----------------------------------------------------------------------
     2. THE CHAIR. A menu row carries its service; a stylist card carries the
     stylist and their first service. Both land in the form.
     ---------------------------------------------------------------------- */
  (function chair() {
    var serviceEl = document.getElementById('b-service');
    var stylistEl = document.getElementById('b-stylist');
    var target = document.getElementById('book');
    if (!serviceEl || !stylistEl || !target) return;

    function go(focusEl) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (focusEl) setTimeout(function () { focusEl.focus({ preventScroll: true }); }, reduceMotion ? 0 : 500);
    }

    document.addEventListener('click', function (e) {
      var stylist = e.target.closest('[data-stylist]');
      if (stylist) {
        stylistEl.value = stylist.getAttribute('data-stylist');
        if (stylist.getAttribute('data-service')) serviceEl.value = stylist.getAttribute('data-service');
        go(document.getElementById('b-date'));
        return;
      }
      var row = e.target.closest('.row[data-service]');
      if (row) {
        serviceEl.value = row.getAttribute('data-service');
        go(stylistEl);
      }
    });
  })();

  /* ----------------------------------------------------------------------
     3. NAV
     ---------------------------------------------------------------------- */
  (function nav() {
    var el = document.querySelector('[data-nav]');
    if (!el) return;
    var update = function () { el.classList.toggle('is-stuck', window.scrollY > 24); };
    window.addEventListener('scroll', update, { passive: true });
    update();
  })();

  /* ----------------------------------------------------------------------
     4. REVEALS
     ---------------------------------------------------------------------- */
  (function reveals() {
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.menu__head, .group, .stylists__head, .stylist, .book__copy, .form, .visit__copy, .hours');
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
     5. BOOKING FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the booking system's endpoint.
     ---------------------------------------------------------------------- */
  (function book() {
    var form = document.getElementById('book-form');
    if (!form) return;
    var statusEl = document.getElementById('book-status');
    var dateEl = document.getElementById('b-date');

    // The day picker lists the next ten open days, so closed days cannot be chosen at all.
    function isoOf(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
    (function fillDays() {
      var d = new Date(), added = 0, guard = 0;
      var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      while (added < 10 && guard++ < 30) {
        if (HOURS[d.getDay()]) {
          var opt = document.createElement('option');
          opt.value = isoOf(d);
          opt.textContent = (added === 0 && d.getDate() === new Date().getDate() ? 'Today, ' : '') + DAYS[d.getDay()].slice(0, 3) + ' ' + MONTHS[d.getMonth()] + ' ' + d.getDate();
          dateEl.appendChild(opt);
          added++;
        }
        d.setDate(d.getDate() + 1);
      }
    })();

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
      if (input === dateEl && v && !HOURS[new Date(v + 'T12:00:00').getDay()]) return false;   // closed that day
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
      // Demo: resolve after a short delay. Live: POST to the booking system.
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
        name: document.getElementById('b-name').value.trim(),
        service: document.getElementById('b-service').value,
        stylist: document.getElementById('b-stylist').value,
        date: new Date(dateEl.value + 'T12:00:00'),
        time: document.getElementById('b-time').value
      };

      send(data).then(function () {
        var who = data.stylist === 'First available' ? 'the first available stylist' : data.stylist;
        var when = DAYS[data.date.getDay()] + ' ' + data.time.replace(/\s*\(.*\)$/, '').toLowerCase();
        var priceNote = FROM_SERVICES.indexOf(data.service) !== -1 ? ', and the exact color price at your consult' : '';
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Thanks, ' + data.name.split(' ')[0] + '. ' + data.service + ' with ' + who + ', ' + when + ', requested. We’ll confirm by text within the hour' + priceNote + '.';
        statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
