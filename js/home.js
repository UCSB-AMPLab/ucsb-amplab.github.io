(function () {
	'use strict';

	function typedKey(text) {
		// Cheap, stable key for sessionStorage so we only animate once per session.
		return 'ampl-typed:' + (text.length + ':' + text.slice(0, 32));
	}

	function typeOut(el) {
		var text = el.getAttribute('data-typed') || el.textContent;
		var delay = parseInt(el.getAttribute('data-typed-delay'), 10) || 300;
		var speed = parseInt(el.getAttribute('data-typed-speed'), 10) || 38;
		var alreadyShown = false;
		try { alreadyShown = sessionStorage.getItem(typedKey(text)) === '1'; } catch (e) {}
		if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			alreadyShown = true;
		}

		// If we've already typed this in the session, render the final text and a static caret.
		if (alreadyShown) {
			el.textContent = text;
			var caretStatic = document.createElement('span');
			caretStatic.className = 'typed-caret';
			caretStatic.style.opacity = '0.35';
			el.appendChild(caretStatic);
			return;
		}

		el.textContent = '';
		var caret = document.createElement('span');
		caret.className = 'typed-caret';
		el.appendChild(caret);
		var i = 0;
		setTimeout(function tick() {
			i += 1;
			caret.insertAdjacentText('beforebegin', text.charAt(i - 1));
			if (i < text.length) {
				setTimeout(tick, speed);
			} else {
				caret.style.opacity = '0.35';
				try { sessionStorage.setItem(typedKey(text), '1'); } catch (e) {}
			}
		}, delay);
	}

	function wireMenuToggle() {
		var btn = document.querySelector('.hd__menu-toggle');
		var nav = document.querySelector('.hd__nav');
		if (!btn || !nav) return;
		btn.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
			btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		});
	}

	function prefersReducedMotion() {
		return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	// Wraps each character of an element in a span, returning the letter spans.
	function letterize(el) {
		var text = el.textContent;
		el.textContent = '';
		return text.split('').map(function (ch) {
			var s = document.createElement('span');
			s.textContent = ch;
			el.appendChild(s);
			return s;
		}).filter(function (s) { return s.textContent.trim(); });
	}

	function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

	// Homepage Workshop stratum: a random letter occasionally stutters like a
	// workshop sign with a loose neon tube.
	function wireWorkshopFlicker() {
		if (prefersReducedMotion()) return;
		var el = document.querySelector('#workshop .layer__title a');
		if (!el) return;
		var spans = letterize(el);
		(function tick() {
			var s = randomFrom(spans);
			s.classList.add('flicker');
			setTimeout(function () { s.classList.remove('flicker'); }, 950);
			setTimeout(tick, 3200 + Math.random() * 2800);
		}());
	}

	// Workshop landing heading only (.lp__h1--playful): every so often a letter
	// briefly becomes the wrong glyph and is quickly corrected. Serious pages
	// keep static titles.
	function wireHeadingGlitch() {
		if (prefersReducedMotion()) return;
		var el = document.querySelector('.lp__h1--playful');
		if (!el) return;
		var glyphs = '#%?*+=&'.split('');
		var spans = letterize(el);
		(function tick() {
			var s = randomFrom(spans);
			var orig = s.textContent;
			s.classList.add('glyph-swap');
			s.textContent = randomFrom(glyphs);
			setTimeout(function () { s.textContent = orig; }, 400);
			setTimeout(function () { s.classList.remove('glyph-swap'); }, 800);
			setTimeout(tick, 7000 + Math.random() * 6000);
		}());
	}

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('[data-typed]').forEach(typeOut);
		wireMenuToggle();
		wireWorkshopFlicker();
		wireHeadingGlitch();
	});
}());
