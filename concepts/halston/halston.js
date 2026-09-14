/* HALSTON & CO. — concept site behavior. Vanilla, no dependencies.
   1. Hours: one table drives the live line in the hero's hours bar and the "today" row.
   2. Book with: "Book with <barber>" and each ledger row's "Book" carry their values into the form and scroll to it.
   3. Nav: hairline once the page has scrolled.
   4. Book form: validation and a demo confirmation that names the barber (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal.
     ---------------------------------------------------------------------- */
  var HOURS = { 0: null, 1: [9, 19], 2: [9, 19], 3: [9, 19], 4: [9, 19], 5: [9, 19], 6: [9, 19] };
  var LAST_CHAIR = 18.5;
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* A fictional day of open chairs, as start times in decimal hours per weekday.
     Demonstration data: on a live site this comes from the shop's book. */
  var OPENINGS = {
    1: [9.5, 11.0, 13.5, 15.67, 17.25],
    2: [9.0, 10.5, 12.25, 14.0, 16.5, 18.0],
    3: [9.75, 11.5, 13.0, 15.5, 17.75],
    4: [10.0, 12.0, 14.5, 16.25, 18.0],
    5: [9.25, 11.75, 15.67, 17.5],
    6: [9.0, 10.25, 13.75, 16.0]
  };

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
  }
  function isoOf(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function sameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function dayLabel(date, now) {
    var tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);
    if (sameDay(date, now)) return 'Today';
    if (sameDay(date, tomorrow)) return 'Tomorrow';
    return DAYS[date.getDay()].slice(0, 3) + ' ' + MONTHS[date.getMonth()] + ' ' + date.getDate();
  }

  /* The next open chair from now: today's first opening that is still ahead, else the next day's first. */
  function nextChair(now) {
    var d = new Date(now);
    var t = now.getHours() + now.getMinutes() / 60;
    for (var i = 0; i < 8; i++) {
      var slots = OPENINGS[d.getDay()] || [];
      for (var s = 0; s < slots.length; s++) {
        if (i === 0 && slots[s] <= t + 0.25) continue;
        return { when: i === 0 ? 'today' : i === 1 ? 'tomorrow' : DAYS[d.getDay()], at: slots[s] };
      }
      d.setDate(d.getDate() + 1);
      t = 0;
    }
    return null;
  }

  function status(now) {
    var day = now.getDay();
    var t = now.getHours() + now.getMinutes() / 60;
    var today = HOURS[day];
    var next = nextChair(now);
    var chair = next ? ' · next chair ' + (next.when === 'today' ? '' : next.when + ' ') + fmt(next.at) : '';
    if (today && t >= today[0] && t < today[1]) {
      return { open: true, text: 'Open · closes ' + fmt(today[1]) + chair };
    }
    if (today && t < today[0]) {
      return { open: false, text: 'Opens ' + fmt(today[0]) + chair };
    }
    for (var i = 1; i <= 7; i++) {
      var d = (day + i) % 7;
      if (HOURS[d]) return { open: false, text: 'Closed · opens ' + (i === 1 ? 'tomorrow' : DAYS[d]) + ' ' + fmt(HOURS[d][0]) + chair };
    }
    return { open: false, text: 'Closed' };
  }

  (function hours() {
    var now = new Date();
    var line = document.querySelector('[data-status]');
    if (line) {
      var s = status(now);
      line.textContent = s.text;
      line.classList.toggle('is-closed', !s.open);
    }
    document.querySelectorAll('[data-hours] tr[data-day]').forEach(function (row) {
      if (Number(row.getAttribute('data-day')) === now.getDay()) row.classList.add('is-today');
    });
  })();

  /* ----------------------------------------------------------------------
     2. BOOK WITH → THE FORM
     ---------------------------------------------------------------------- */
  (function bookWith() {
    var barberEl = document.getElementById('b-barber');
    var serviceEl = document.getElementById('b-service');
    var dayEl = document.getElementById('b-day');
    var target = document.getElementById('book');
    if (!barberEl || !serviceEl || !dayEl || !target) return;

    // The day picker lists the next ten open days, so Sundays cannot be chosen at all.
    (function fillDays() {
      var d = new Date(), now = new Date(), added = 0, guard = 0;
      var t = now.getHours() + now.getMinutes() / 60;
      while (added < 10 && guard++ < 30) {
        var open = HOURS[d.getDay()];
        var todayDone = sameDay(d, now) && t >= LAST_CHAIR;
        if (open && !todayDone) {
          var opt = document.createElement('option');
          opt.value = isoOf(d);
          opt.textContent = dayLabel(d, now);
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
      var barberBtn = e.target.closest('[data-book-barber]');
      if (barberBtn) {
        barberEl.value = barberBtn.getAttribute('data-book-barber');
        go(serviceEl.value ? dayEl : serviceEl);
        return;
      }
      var serviceBtn = e.target.closest('[data-book-service]');
      if (serviceBtn) {
        serviceEl.value = serviceBtn.getAttribute('data-book-service');
        go(barberEl.value ? dayEl : barberEl);
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
     4. BOOK FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the shop's booking endpoint.
     ---------------------------------------------------------------------- */
  (function book() {
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
      if (input.id === 'b-day' && v && !HOURS[new Date(v + 'T12:00:00').getDay()]) return false;
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
      // Demo: resolve after a short delay. Live: POST to the shop's book.
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
        barber: document.getElementById('b-barber').value,
        service: document.getElementById('b-service').value,
        date: new Date(document.getElementById('b-day').value + 'T12:00:00'),
        time: document.getElementById('b-time').value
      };

      send(data).then(function () {
        var first = data.name.split(' ')[0];
        var who = data.barber === 'First available' ? 'the first open chair' : data.barber.split(' ')[0];
        var when = DAYS[data.date.getDay()] + ' ' + data.time.replace(/\s*\(.*\)$/, '').toLowerCase();
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Thanks, ' + first + '. ' + data.service + ' with ' + who + ', ' + when + '. We’ll text you the exact time within the hour; reply to that text if it doesn’t work.';
        statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
