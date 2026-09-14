/* NORTHLINE DENTAL — concept site behavior. Vanilla, no dependencies.
   1. Hours + openings: one table drives the hero status line, the availability board, and the "today" row.
   2. The board: tapping an opening carries its day and time of day into the form; "Start your forms" scrolls there.
   3. Nav: hairline once the page has scrolled.
   4. Request form: validation and a demo confirmation (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal (7.5 = 7:30 am).
     ---------------------------------------------------------------------- */
  var HOURS = {
    0: null, 6: null,          // closed weekends
    1: [7.5, 17],
    2: [7.5, 17],
    3: [7.5, 17],
    4: [7.5, 17],
    5: [7.5, 14]
  };
  var PHONES_UNTIL = 17.5;
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var TOWN = 'Duluth';

  /* A fictional week of open chairs, as start times in decimal hours per weekday.
     Demonstration data: on a live site this comes from the practice software. */
  var OPENINGS = {
    1: [8.17, 14.67],
    2: [9.5, 15.25],
    3: [8.17, 13.0, 15.5],
    4: [14.67],
    5: [9.0, 11.25]
  };

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + ':' + (min < 10 ? '0' : '') + min + ' ' + suffix;
  }
  function fmtHour(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
  }
  function isoOf(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function sameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

  /* The next N openings from now, across the coming days. */
  function nextOpenings(now, n) {
    var out = [];
    var d = new Date(now);
    var t = now.getHours() + now.getMinutes() / 60;
    for (var i = 0; i < 21 && out.length < n; i++) {
      var slots = OPENINGS[d.getDay()] || [];
      for (var s = 0; s < slots.length && out.length < n; s++) {
        if (i === 0 && slots[s] <= t + 0.5) continue;      // not one that is about to start
        out.push({ date: new Date(d), at: slots[s] });
      }
      d.setDate(d.getDate() + 1);
    }
    return out;
  }

  function dayLabel(date, now) {
    var tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);
    if (sameDay(date, now)) return 'Today';
    if (sameDay(date, tomorrow)) return 'Tomorrow';
    return DAYS[date.getDay()].slice(0, 3) + ' ' + MONTHS[date.getMonth()] + ' ' + date.getDate();
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
      return { open: true, text: 'Open today until ' + fmtHour(today[1]) + ' · phones answered until ' + fmtHour(PHONES_UNTIL) };
    }
    if (today && t < today[0]) {
      return { open: false, text: 'Opens at ' + fmtHour(today[0]) + ' · text us anytime' };
    }
    var next = nextOpening(now);
    return { open: false, text: next ? 'Closed now · opens ' + next.day + ' at ' + fmtHour(next.at) + ' · text us anytime' : 'Closed' };
  }

  (function hoursAndBoard() {
    var now = new Date();
    var line = document.querySelector('[data-status]');
    if (line) {
      var s = status(now);
      line.textContent = s.text + ' · ' + TOWN;
      line.classList.toggle('is-closed', !s.open);
    }
    document.querySelectorAll('[data-hours] tr[data-day]').forEach(function (row) {
      if (Number(row.getAttribute('data-day')) === now.getDay()) row.classList.add('is-today');
    });

    var openings = nextOpenings(now, 3);
    document.querySelectorAll('[data-tile]').forEach(function (el, i) {
      var o = openings[i];
      if (!o) { el.hidden = true; return; }
      el.querySelector('.tile__day').textContent = dayLabel(o.date, now);
      el.querySelector('.tile__time').textContent = fmt(o.at);
      el.dataset.date = isoOf(o.date);
      el.dataset.period = o.at < 12 ? 'Morning (7:30–12)' : 'Afternoon (12–5)';
      el.setAttribute('aria-label', dayLabel(o.date, now) + ' at ' + fmt(o.at) + '. Request this time.');
    });
  })();

  /* ----------------------------------------------------------------------
     2. THE BOARD → THE FORM
     ---------------------------------------------------------------------- */
  (function board() {
    var dayEl = document.getElementById('r-day');
    var timeEl = document.getElementById('r-time');
    var target = document.getElementById('book');
    if (!dayEl || !timeEl || !target) return;

    // The day picker lists the next ten open days, so closed days cannot be chosen at all.
    (function fillDays() {
      var d = new Date(), added = 0, guard = 0;
      while (added < 10 && guard++ < 30) {
        if (HOURS[d.getDay()]) {
          var opt = document.createElement('option');
          opt.value = isoOf(d);
          opt.textContent = dayLabel(d, new Date());
          dayEl.appendChild(opt);
          added++;
        }
        d.setDate(d.getDate() + 1);
      }
    })();

    function go(focusEl) {
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (focusEl) setTimeout(function () { focusEl.focus({ preventScroll: true }); }, reduceMotion ? 0 : 500);
    }

    document.addEventListener('click', function (e) {
      var tile = e.target.closest('[data-tile]');
      if (tile && tile.dataset.date) {
        dayEl.value = tile.dataset.date;
        timeEl.value = tile.dataset.period;
        go(document.getElementById('r-reason'));
        return;
      }
      if (e.target.closest('[data-forms]')) {
        var reason = document.getElementById('r-reason');
        if (reason && !reason.value) reason.value = 'New-patient exam & cleaning';
        go(dayEl);
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
     4. REQUEST FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the practice software's endpoint.
     ---------------------------------------------------------------------- */
  (function request() {
    var form = document.getElementById('book-form');
    if (!form) return;
    var statusEl = document.getElementById('book-status');

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
      if (input.id === 'r-day' && v && !HOURS[new Date(v + 'T12:00:00').getDay()]) return false;
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
      // Demo: resolve after a short delay. Live: POST to the practice software.
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
        date: new Date(document.getElementById('r-day').value + 'T12:00:00'),
        time: document.getElementById('r-time').value,
        reason: document.getElementById('r-reason').value,
        plan: document.getElementById('r-plan').value
      };

      send(data).then(function () {
        var first = data.name.split(' ')[0];
        var when = DAYS[data.date.getDay()] + ' ' + data.time.replace(/\s*\(.*\)$/, '').toLowerCase();
        var urgent = /hurts|broken/i.test(data.reason);
        var planNote = data.plan === 'No insurance' ? ' The prices on this page are what you’ll pay.'
          : data.plan === 'Another plan' ? ' Text us a photo of your card and we’ll check the plan before you come in.'
          : ' We’ll check your ' + data.plan + ' plan and text the estimated cost before the visit.';
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Thanks, ' + first + '. ' + data.reason + ', ' + when + ', requested.' +
          (urgent ? ' Because something hurts, we’ll look for a same-day slot first and text you within the hour.' : ' We’ll confirm by text within the hour.') + planNote;
        statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
