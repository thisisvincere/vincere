/* APEX AUTO — concept site behavior. Vanilla, no dependencies.
   1. Hours: one table drives the hero status line, the bay board, and the "today" row.
   2. Bay board: four bays, a fictional booking pattern, the next open slot as the signal.
   3. Nav: hairline once the page has scrolled.
   4. Reveals: sections rise once on scroll.
   5. Schedule form: validation and a demo confirmation (no backend). */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. HOURS. Edit this table for a new client; the HTML table is the
     visible copy, this is the copy the status line reasons from.
     Keys are JS weekdays (0 = Sunday). Times are 24h decimal (17.5 = 5:30 pm).
     ---------------------------------------------------------------------- */
  var HOURS = {
    0: null,          // Sunday — closed
    1: [7.5, 18],
    2: [7.5, 18],
    3: [7.5, 18],
    4: [7.5, 18],
    5: [7.5, 18],
    6: [8, 14]
  };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var ADDRESS = '1480 Brannan Rd';
  var LAST_SLOT_BEFORE_CLOSE = 1.5;   // no new bay starts in the last 90 minutes

  /* A fictional booking pattern per bay, as [start, end] blocks in decimal hours.
     Demonstration data: on a live site this comes from the shop's scheduler. */
  var BOOKED = {
    1: [[7.5, 10], [11, 13.5], [14.5, 16]],
    2: [[8, 9], [9.5, 12.5], [13, 17.5]],
    3: [[7.5, 9.5], [10.5, 11.5], [15, 17]],
    4: [[9, 15]]
  };

  function fmt(h) {
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + (min ? ':' + (min < 10 ? '0' : '') + min : '') + ' ' + suffix;
  }
  function fmtSlot(h) {   // always with minutes, to match the form's <option> labels
    var whole = Math.floor(h), min = Math.round((h - whole) * 60);
    var suffix = whole >= 12 ? 'pm' : 'am';
    var hour12 = whole % 12 === 0 ? 12 : whole % 12;
    return hour12 + ':' + (min < 10 ? '0' : '') + min + ' ' + suffix;
  }
  function nb(s) { return s.replace(/ (am|pm)\b/g, ' $1'); }   // keep "7:30 am" on one line when displayed
  function iso(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function nextOpenDay(now) {
    for (var i = 1; i <= 7; i++) {
      var d = (now.getDay() + i) % 7;
      if (HOURS[d]) return { offset: i, day: i === 1 ? 'tomorrow' : DAYS[d], name: DAYS[d], at: HOURS[d][0], key: d };
    }
    return null;
  }

  /* Earliest free half-hour slot for a bay on a given weekday, at or after `from`. */
  function nextSlot(bay, dayKey, from) {
    var open = HOURS[dayKey];
    if (!open) return null;
    var t = Math.max(open[0], Math.ceil(from * 2) / 2);
    var last = open[1] - LAST_SLOT_BEFORE_CLOSE;
    var blocks = BOOKED[bay] || [];
    while (t <= last) {
      var busy = false;
      for (var i = 0; i < blocks.length; i++) {
        if (t >= blocks[i][0] && t < blocks[i][1]) { busy = true; t = blocks[i][1]; break; }
      }
      if (!busy) return t;
    }
    return null;
  }

  function status(now, board) {
    var day = now.getDay();
    var t = now.getHours() + now.getMinutes() / 60;
    var today = HOURS[day];

    if (today && t >= today[0] && t < today[1]) {
      var bayText = board.earliest ? ' · next open bay ' + fmtSlot(board.earliest.at) : ' · bays full today';
      var closingSoon = today[1] - t <= 1;
      return { open: true, text: (closingSoon ? 'Open · closing at ' + fmt(today[1]) : 'Open until ' + fmt(today[1])) + bayText };
    }
    if (today && t < today[0]) {
      return { open: false, text: 'Opens today at ' + fmt(today[0]) + (board.earliest ? ' · first open bay ' + fmtSlot(board.earliest.at) : '') };
    }
    var next = nextOpenDay(now);
    return { open: false, text: next ? 'Closed now · opens ' + next.day + ' at ' + fmt(next.at) : 'Closed' };
  }

  /* ----------------------------------------------------------------------
     2. BAY BOARD
     ---------------------------------------------------------------------- */
  function buildBoard(now) {
    var day = now.getDay();
    var t = now.getHours() + now.getMinutes() / 60;
    var today = HOURS[day];
    var inHours = today && t >= today[0] && t < today[1];
    var beforeOpen = today && t < today[0];

    var dayKey, from, date, dayLabel;
    if (inHours || beforeOpen) {
      dayKey = day; from = inHours ? t : today[0]; date = new Date(now); dayLabel = '';
    } else {
      var next = nextOpenDay(now);
      dayKey = next.key; from = next.at; date = new Date(now); date.setDate(now.getDate() + next.offset);
      dayLabel = next.offset === 1 ? 'Tomorrow' : next.name;
    }

    var bays = [];
    var earliest = null;
    for (var b = 1; b <= 4; b++) {
      var at = nextSlot(b, dayKey, from);
      var entry = { bay: b, at: at, date: date, dayLabel: dayLabel };
      if (at !== null && (!earliest || at < earliest.at)) earliest = entry;
      bays.push(entry);
    }
    return { bays: bays, earliest: earliest, now: t, inHours: inHours };
  }

  function renderBoard(board) {
    board.bays.forEach(function (entry) {
      var el = document.querySelector('[data-bay="' + entry.bay + '"]');
      if (!el) return;
      var time = el.querySelector('.bay__time');
      var state = el.querySelector('.bay__state');
      el.classList.remove('is-open');
      if (entry.at === null) {
        time.textContent = 'Full';
        state.textContent = entry.dayLabel ? 'No openings ' + entry.dayLabel.toLowerCase() : 'No openings today';
        el.disabled = true;
        el.setAttribute('aria-label', 'Bay ' + entry.bay + ', no openings');
        return;
      }
      var label = fmtSlot(entry.at);
      time.textContent = nb(entry.dayLabel ? entry.dayLabel + ' ' + label : label);
      var isEarliest = board.earliest && board.earliest.bay === entry.bay;
      if (isEarliest) {
        el.classList.add('is-open');
        state.textContent = board.inHours && entry.at - board.now <= 0.5 ? 'Open now' : 'Next opening';
      } else {
        state.textContent = 'Next opening';
      }
      el.disabled = false;
      el.setAttribute('aria-label', 'Bay ' + entry.bay + ', next opening ' + (entry.dayLabel ? entry.dayLabel + ' at ' : '') + label + '. Book this time.');
      el.dataset.slot = label;
      el.dataset.date = iso(entry.date);
    });
  }

  (function hoursAndBoard() {
    var now = new Date();
    var board = buildBoard(now);
    renderBoard(board);

    var line = document.querySelector('[data-status]');
    if (line) {
      var s = status(now, board);
      line.textContent = nb(s.text) + ' · ' + ADDRESS;
      line.classList.toggle('is-closed', !s.open);
    }
    document.querySelectorAll('[data-hours] tr[data-day]').forEach(function (row) {
      if (Number(row.getAttribute('data-day')) === now.getDay()) row.classList.add('is-today');
    });

    // Tapping an open bay carries its time into the form.
    var boardEl = document.querySelector('[data-board]');
    if (boardEl) {
      boardEl.addEventListener('click', function (e) {
        var bay = e.target.closest('.bay');
        if (!bay || bay.disabled) return;
        var timeEl = document.getElementById('s-time');
        var dateEl = document.getElementById('s-date');
        if (timeEl) timeEl.value = bay.dataset.slot;
        if (dateEl) dateEl.value = bay.dataset.date;
        var target = document.getElementById('schedule');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        var service = document.getElementById('s-service');
        if (service) setTimeout(function () { service.focus({ preventScroll: true }); }, reduceMotion ? 0 : 500);
      });
    }
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
    var targets = document.querySelectorAll('.fact, .services__head, .group, .how__copy, .how__photos, .shop__media, .shop__copy, .visit__copy, .hours, .schedule__copy, .form');
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
     5. SCHEDULE FORM (demo). Validates, then shows a confirmation. On a live
     site, replace `send()` with the shop management system's endpoint.
     ---------------------------------------------------------------------- */
  (function schedule() {
    var form = document.getElementById('schedule-form');
    if (!form) return;
    var statusEl = document.getElementById('schedule-status');
    var dateEl = document.getElementById('s-date');

    // Earliest bookable date is today.
    var todayIso = iso(new Date());
    dateEl.min = todayIso;

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
        if (v < todayIso) return false;             // in the past
      }
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
      // Demo: resolve after a short delay. Live: POST to the shop management system.
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
        name: document.getElementById('s-name').value.trim(),
        date: new Date(dateEl.value + 'T12:00:00'),
        time: document.getElementById('s-time').value,
        service: document.getElementById('s-service').value,
        vehicle: document.getElementById('s-vehicle').value.trim()
      };

      send(data).then(function () {
        var when = DAYS[data.date.getDay()] + ' at ' + data.time;
        form.classList.add('is-sent');
        statusEl.hidden = false;
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Thanks, ' + data.name.split(' ')[0] + '. Bay requested for ' + when + ' — ' + data.service.toLowerCase() + ' on the ' + data.vehicle + '. We’ll confirm by text within the hour.';
        statusEl.setAttribute('tabindex', '-1');
        statusEl.focus();
      });
    });
  })();
})();
