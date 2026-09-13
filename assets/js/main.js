/* ==========================================================================
   VINCERE — site behavior
   No dependencies. Everything degrades gracefully without JS.
   --------------------------------------------------------------------------
   1. Sticky navbar
   2. Mobile menu
   3. Scroll reveals & stage
   4. Concept detail
   5. Contact form
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     1. STICKY NAVBAR
     Adds a translucent background once the page has scrolled past the top.
     ====================================================================== */
  (function stickyNav() {
    var nav = document.querySelector('[data-nav]');
    if (!nav) return;

    var ticking = false;

    function update() {
      nav.classList.toggle('is-stuck', window.scrollY > 12);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  })();

  /* ======================================================================
     2. MOBILE MENU
     ====================================================================== */
  (function mobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-menu]');
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      document.body.classList.toggle('menu-open', open);
      toggle.querySelector('.nav__toggle-label').textContent = open ? 'Close' : 'Menu';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after navigating to a section.
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // If the viewport grows into the desktop layout, reset state.
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  })();

  /* ======================================================================
     3. SCROLL REVEALS & STAGE
     Sections below the hero rise 12px into place once. The hero stage's
     gradient angle follows the pointer by a few degrees. Both are skipped
     under reduced motion; without JS nothing is ever hidden.
     ====================================================================== */
  (function ambient() {
    if (reduceMotion) return;

    var targets = document.querySelectorAll(
      '.section__head, .credibility__head, .pillar, .svc__card, .svc__note, .why__item, .proj, .work__note, ' +
      '.step, .about__copy, .about__card, .faq__head, .faq__list, .contact__copy, .contact__form-wrap'
    );
    if (targets.length && 'IntersectionObserver' in window) {
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
    }

    var hero = document.querySelector('.hero');
    var stage = document.querySelector('.stage__bg');
    if (!hero || !stage || !window.matchMedia('(hover: hover)').matches) return;
    var raf = null;
    hero.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = window.requestAnimationFrame(function () {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
        stage.style.setProperty('--stage-angle', (118 + x * 14).toFixed(1) + 'deg');
        raf = null;
      });
    }, { passive: true });
  })();

  /* ======================================================================
     4. CONCEPT DETAIL
     "View concept" expands one shared panel beneath the grid. The visual is
     cloned from the card that opened it, so each concept's preview markup
     has exactly one source of truth. No modal: nothing here needs to
     interrupt the page or trap focus.
     ====================================================================== */
  (function conceptDetail() {
    var panel = document.querySelector('[data-detail]');
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-project]'));
    if (!panel || !buttons.length) return;

    // Each concept is one structure plus a token block; `skins` lists the
    // alternative token blocks defined in CSS as .pv--<key>[data-skin="<id>"].
    // The first skin is the default (no data-skin attribute). Swatches are the
    // ground and the action color of that skin, for the switcher's dots only.
    // `url` points at the full concept site when one exists.
    var PROJECTS = {
      sasso: {
        tag: 'Restaurant',
        title: 'Sasso',
        url: 'concepts/sasso/index.html',
        desc: 'A neighborhood trattoria treated like a destination. The site leads with atmosphere rather than a menu dump, and puts reservations within reach on every screen.',
        points: [
          'Editorial serif typography against a warm, dark palette',
          'Reservation call to action fixed within thumb reach on mobile',
          'Menu structured as readable sections, not a PDF download',
          'Hours, location, and parking answered without a scroll hunt'
        ],
        skins: [
          { id: 'editorial', label: 'Editorial', swatch: ['#14100E', '#C2A87E'] },
          { id: 'daylight',  label: 'Daylight',  swatch: ['#F6F1E7', '#7A4A2C'] },
          { id: 'verde',     label: 'Verde',     swatch: ['#172A20', '#D6C48E'] }
        ]
      },
      halston: {
        tag: 'Barber shop',
        title: 'Halston & Co.',
        desc: 'High contrast and confident. Built around a single action, booking, with the barbers, the services, and the hours never more than one scroll away.',
        points: [
          'One primary action, repeated with intent rather than clutter',
          'Service list with real pricing instead of "call for details"',
          'Individual barber profiles that link straight into booking',
          'Type-led layout that needs no photography to feel finished'
        ],
        skins: [
          { id: 'mono',    label: 'Monochrome', swatch: ['#08080A', '#F2F2F0'] },
          { id: 'ivory',   label: 'Ivory',      swatch: ['#F4F0E8', '#121212'] },
          { id: 'oxblood', label: 'Oxblood',    swatch: ['#2C0F11', '#E9CFC3'] }
        ]
      },
      northline: {
        tag: 'Dental practice',
        title: 'Northline Dental',
        desc: 'Calm, light, and reassuring. The two questions patients actually have (can I get in soon, and do you take my insurance?) are answered before they scroll.',
        points: [
          'Soft palette and generous spacing to reduce visitor anxiety',
          'Availability and insurance surfaced in the first screen',
          'New-patient forms handled online before the first visit',
          'Accessible contrast and type sizing throughout'
        ],
        skins: [
          { id: 'sky',   label: 'Sky',   swatch: ['#EFF6F8', '#17798A'] },
          { id: 'slate', label: 'Slate', swatch: ['#121E25', '#5FCBD9'] },
          { id: 'warm',  label: 'Warm',  swatch: ['#FBF6EF', '#C9622A'] }
        ]
      },
      apex: {
        tag: 'Automotive service',
        title: 'Apex Auto',
        desc: 'Technical and precise, with online scheduling at the center. Service pricing is visible up front instead of hidden behind a phone call.',
        points: [
          'Scheduling flow built for a phone in a parking lot',
          'Transparent service pricing as a trust signal',
          'Structured data for local search and map results',
          'Dense, engineered layout that still breathes on mobile'
        ],
        skins: [
          { id: 'graphite', label: 'Graphite', swatch: ['#0C0E11', '#FF5A1F'] },
          { id: 'signal',   label: 'Signal',   swatch: ['#F3F4F6', '#E2391B'] },
          { id: 'racing',   label: 'Racing',   swatch: ['#0B2019', '#BDF24A'] }
        ]
      },
      auburn: {
        tag: 'Hair salon',
        title: 'Auburn & Ash',
        desc: 'Soft ground, one copper action, and the price list in the open. The site answers the two questions every salon gets by DM, how much and when, before anyone has to ask.',
        points: [
          'Service menu with prices on the first screen, not in a PDF',
          'Booking tied to the stylist and the service, not a generic form',
          'Stylist profiles with their own work, linking straight to their chair',
          'Hours, parking, and cancellation policy answered up front'
        ],
        skins: [
          { id: 'sage',  label: 'Sage',  swatch: ['#E9EDE4', '#B4552D'] },
          { id: 'blush', label: 'Blush', swatch: ['#F9E9E4', '#C2483E'] },
          { id: 'noir',  label: 'Noir',  swatch: ['#121115', '#D6A06A'] }
        ]
      },
      kestrel: {
        tag: 'Service contractor',
        title: 'Kestrel Plumbing & Heating',
        desc: 'Built for someone standing in a flooded kitchen. Call and quote actions come first, the license number and prices are visible, and there is nothing to read before tapping.',
        points: [
          'Tap-to-call and tap-to-text fixed on every mobile screen',
          'Flat prices for the common jobs; emergency rate stated plainly',
          'License, insurance, and service area shown before the pitch',
          'Structured data so the business shows up in map results with hours'
        ],
        skins: [
          { id: 'safety', label: 'Safety', swatch: ['#F6F5F0', '#FFC531'] },
          { id: 'navy',   label: 'Navy',   swatch: ['#12263B', '#FFC531'] },
          { id: 'forest', label: 'Forest', swatch: ['#EEF3EC', '#2F8F5B'] }
        ]
      }
    };

    var els = {
      preview: panel.querySelector('[data-detail-preview]'),
      skins: panel.querySelector('[data-skins]'),
      skinOptions: panel.querySelector('[data-skins-options]'),
      tag: panel.querySelector('[data-detail-tag]'),
      title: panel.querySelector('[data-detail-title]'),
      desc: panel.querySelector('[data-detail-desc]'),
      points: panel.querySelector('[data-detail-points]'),
      link: panel.querySelector('[data-detail-link]'),
      close: panel.querySelector('[data-detail-close]')
    };

    var activeButton = null;
    var activeData = null;

    function mountAfterRow(card) {
      var grid = card.parentElement;
      var cards = Array.prototype.filter.call(grid.children, function (el) { return el.classList.contains('proj'); });
      var cols = window.getComputedStyle(grid).gridTemplateColumns.split(' ').length || 1;
      var idx = cards.indexOf(card);
      var rowEnd = cards[Math.min(cards.length - 1, idx - (idx % cols) + cols - 1)];
      if (rowEnd.nextSibling !== panel) grid.insertBefore(panel, rowEnd.nextSibling);
    }

    /* Skin switcher. Applies data-skin to the cloned preview; the CSS token
       block does the rest. The "open full concept" link carries the skin so
       the full site opens in the same look. */
    function setSkin(skin) {
      var art = els.preview.querySelector('.pv');
      if (!art || !activeData) return;
      var isDefault = skin.id === activeData.skins[0].id;
      if (isDefault) art.removeAttribute('data-skin');
      else art.setAttribute('data-skin', skin.id);

      Array.prototype.forEach.call(els.skinOptions.children, function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-skin') === skin.id ? 'true' : 'false');
      });

      if (activeData.url) {
        els.link.href = activeData.url + (isDefault ? '' : '?skin=' + skin.id);
      }
    }

    function renderSkins(data) {
      els.skinOptions.innerHTML = '';
      if (!data.skins || data.skins.length < 2) { els.skins.hidden = true; return; }
      data.skins.forEach(function (skin) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'skins__btn';
        b.setAttribute('data-skin', skin.id);
        b.setAttribute('aria-pressed', 'false');
        var dot = document.createElement('span');
        dot.className = 'skins__swatch';
        dot.setAttribute('aria-hidden', 'true');
        dot.style.setProperty('--sw-1', skin.swatch[0]);
        dot.style.setProperty('--sw-2', skin.swatch[1]);
        b.appendChild(dot);
        b.appendChild(document.createTextNode(skin.label));
        b.addEventListener('click', function () { setSkin(skin); });
        els.skinOptions.appendChild(b);
      });
      els.skins.hidden = false;
      setSkin(data.skins[0]);
    }

    function labelFor(btn, open) {
      var text = btn.childNodes[0];
      if (text && text.nodeType === 3) text.nodeValue = open ? 'Close concept ' : 'View concept ';
    }

    function close(returnFocus) {
      panel.hidden = true;
      if (activeButton) {
        activeButton.setAttribute('aria-expanded', 'false');
        labelFor(activeButton, false);
        if (returnFocus) activeButton.focus();
      }
      activeButton = null;
      activeData = null;
    }

    function open(btn) {
      var key = btn.getAttribute('data-project');
      var data = PROJECTS[key];
      var card = btn.closest('.proj');
      if (!data || !card) return;

      if (activeButton && activeButton !== btn) {
        activeButton.setAttribute('aria-expanded', 'false');
        labelFor(activeButton, false);
      }

      els.tag.textContent = data.tag;
      els.title.textContent = data.title;
      els.desc.textContent = data.desc;

      els.points.innerHTML = '';
      data.points.forEach(function (text) {
        var li = document.createElement('li');
        li.textContent = text;
        els.points.appendChild(li);
      });

      els.preview.innerHTML = '';
      var art = card.querySelector('.pv');
      if (art) els.preview.appendChild(art.cloneNode(true));

      activeData = data;
      if (data.url) { els.link.href = data.url; els.link.hidden = false; }
      else { els.link.hidden = true; }
      renderSkins(data);

      // Mount the panel right after the opened card's row, so the trigger and
      // the panel are never more than one row apart however many cards exist.
      mountAfterRow(card);

      // Re-trigger the entrance when switching between concepts.
      panel.hidden = true;
      void panel.offsetWidth;
      panel.hidden = false;

      btn.setAttribute('aria-expanded', 'true');
      labelFor(btn, true);
      activeButton = btn;

      panel.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
      panel.focus({ preventScroll: true });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (activeButton === btn && !panel.hidden) close(false);
        else open(btn);
      });
    });

    els.close.addEventListener('click', function () { close(true); });

    // Column count changes with the viewport; keep the open panel on its row.
    window.addEventListener('resize', function () {
      if (!panel.hidden && activeButton) mountAfterRow(activeButton.closest('.proj'));
    }, { passive: true });

    panel.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(true); }
    });
  })();
  /* ======================================================================
     5. CONTACT FORM
     ====================================================================== */
  (function contactForm() {
    var form = document.getElementById('lead-form');
    if (!form) return;

    var status = document.getElementById('form-status');
    var submitBtn = form.querySelector('[data-submit]');
    var label = submitBtn.querySelector('.btn__label');

    var MESSAGES = {
      name: 'Please enter your name.',
      business: 'Please enter your business name.',
      email: 'Please enter a valid email address.',
      need: 'Please choose what you need.',
      message: 'Please tell us a little about your project.',
      website: 'That doesn\'t look like a valid web address.'
    };

    function errorEl(field) {
      return document.getElementById('e-' + field.id.replace(/^f-/, ''));
    }

    function showError(field, message) {
      var el = errorEl(field);
      field.setAttribute('aria-invalid', 'true');
      if (el) { el.textContent = message; el.hidden = false; }
    }

    function clearError(field) {
      var el = errorEl(field);
      field.removeAttribute('aria-invalid');
      if (el) { el.textContent = ''; el.hidden = true; }
    }

    function validateField(field) {
      var name = field.name;
      var value = field.value.trim();

      // Optional website field: only validated when something was typed.
      if (name === 'website') {
        if (!value) return true;
        var ok = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(value);
        if (!ok) { showError(field, MESSAGES.website); return false; }
        clearError(field);
        return true;
      }

      if (!field.required) return true;

      if (!value) { showError(field, MESSAGES[name] || 'This field is required.'); return false; }

      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        showError(field, MESSAGES.email);
        return false;
      }

      clearError(field);
      return true;
    }

    var fields = Array.prototype.slice.call(
      form.querySelectorAll('input[name], select[name], textarea[name]')
    ).filter(function (f) { return f.name !== 'company_url'; });

    fields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
      field.addEventListener('change', function () {
        if (field.tagName === 'SELECT') validateField(field);
      });
    });

    function setStatus(text, state) {
      status.innerHTML = text;
      status.hidden = false;
      if (state) { status.setAttribute('data-state', state); }
      else { status.removeAttribute('data-state'); }
    }

    /* --------------------------------------------------------------------
       >>> FORM SUBMISSION INTEGRATION POINT <<<

       There is no backend wired up yet. Replace the body of `submitLead`
       with a call to whichever service you choose — for example a Formspree
       or Basin endpoint, a Netlify/Vercel form handler, or your own API:

         function submitLead(data) {
           return fetch('YOUR_ENDPOINT_HERE', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(data)
           }).then(function (res) {
             if (!res.ok) throw new Error('Request failed');
           });
         }

       Until then, the fallback below opens the visitor's email client with
       the message pre-filled and addressed to hello@thisisvincere.com, so the
       form still produces a real lead rather than silently doing nothing.
       -------------------------------------------------------------------- */
    var ENDPOINT = 'https://formspree.io/f/myeyqnrb';

    function submitLead(data) {
      if (ENDPOINT && ENDPOINT.indexOf('YOUR_FORM_ID') === -1) {
        return fetch(ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          if (!res.ok) throw new Error('Request failed');
        });
      }

      // Fallback: hand the message off to the visitor's email client.
      var body = [
        'Name: ' + data.name,
        'Business: ' + data.business,
        'Email: ' + data.email,
        'Website: ' + (data.website || '—'),
        'Needs: ' + data.need,
        '',
        data.message
      ].join('\n');

      var href = 'mailto:hello@thisisvincere.com'
        + '?subject=' + encodeURIComponent('New project inquiry — ' + data.business)
        + '&body=' + encodeURIComponent(body);

      window.location.href = href;
      return Promise.resolve('mailto');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: a filled hidden field means a bot. Fail quietly.
      if (form.elements.company_url && form.elements.company_url.value) return;

      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        setStatus('Please fix the highlighted fields and try again.', 'error');
        firstInvalid.focus();
        return;
      }

      var data = {
        name: form.elements.name.value.trim(),
        business: form.elements.business.value.trim(),
        email: form.elements.email.value.trim(),
        website: form.elements.website.value.trim(),
        need: form.elements.need.value,
        message: form.elements.message.value.trim()
      };

      submitBtn.setAttribute('data-state', 'sending');
      submitBtn.disabled = true;
      form.setAttribute('aria-busy', 'true');
      label.textContent = 'Sending…';
      status.hidden = true;

      submitLead(data)
        .then(function (via) {
          form.reset();
          if (via === 'mailto') {
            setStatus(
              'Your email app should be opening with the details filled in. ' +
              'If nothing happened, write to <a href="mailto:hello@thisisvincere.com">hello@thisisvincere.com</a> and we\'ll take it from there.'
            );
          } else {
            setStatus('Thanks — your message is on its way. We\'ll get back to you personally.');
          }
        })
        .catch(function () {
          setStatus(
            'Something went wrong sending that. Please email us directly at ' +
            '<a href="mailto:hello@thisisvincere.com">hello@thisisvincere.com</a>.',
            'error'
          );
        })
        .then(function () {
          submitBtn.removeAttribute('data-state');
          submitBtn.disabled = false;
          form.removeAttribute('aria-busy');
          label.textContent = 'Start a project';
        });
    });
  })();

})();
