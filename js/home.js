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

	// People page (.js-people-stagger): groups the markdown roster into blocks
	// that stagger horizontally and may tilt by a per-entry margin step, with
	// subheadings riding the same line as entries. Config is by block order;
	// the margins only take effect at >=900px (see _redesign-people.scss).
	function wirePeopleStagger() {
		var root = document.querySelector('.js-people-stagger');
		if (!root) return;

		// Break role lines before their season/year term so the term never
		// wraps mid-way: "…, Collaborative Cataloging Project, | Fall 2024-".
		root.querySelectorAll('em').forEach(function (em) {
			em.innerHTML = em.innerHTML.replace(
				/,\s+((?:Fall|Winter|Spring|Summer|\d{4})[\s\S]*)$/,
				',<br>$1'
			);
		});

		var config = [
			{ left: '0%', tilt: 0, pull: 0 },
			{ left: '4%', tilt: 6, pull: -56 },
			{ left: '9%', tilt: 0, pull: -48 },
			{ left: '12%', tilt: 5, pull: 0 }
		];

		// A new block starts at every h3, and at h4s before the first h3.
		var blocks = [];
		var current = null;
		var seenH3 = false;
		Array.prototype.slice.call(root.children).forEach(function (node) {
			if (node.tagName === 'H3' || (node.tagName === 'H4' && !seenH3)) {
				if (node.tagName === 'H3') seenH3 = true;
				current = { head: node, nodes: [] };
				blocks.push(current);
				return;
			}
			if (current) current.nodes.push(node);
		});

		blocks.forEach(function (b, i) {
			var conf = config[i] || { left: '0%', tilt: 0, pull: 0 };
			var wrap = document.createElement('div');
			wrap.className = 'pp-block';
			root.insertBefore(wrap, b.head);
			wrap.appendChild(b.head);

			// Items share the tilt line: subheadings (h4) count as items, and
			// each h5 starts an entry that absorbs its following paragraphs.
			var items = [];
			var entry = null;
			b.nodes.forEach(function (n) {
				if (n.tagName === 'H4') { items.push(n); entry = null; wrap.appendChild(n); return; }
				if (n.tagName === 'H5') {
					entry = document.createElement('div');
					items.push(entry);
					wrap.appendChild(entry);
					entry.appendChild(n);
					return;
				}
				(entry || wrap).appendChild(n);
			});

			var n = items.length;
			items.forEach(function (it, j) {
				var m = conf.tilt > 0 ? j * conf.tilt : conf.tilt < 0 ? (n - 1 - j) * (-conf.tilt) : 0;
				it.classList.add('pp-item');
				it.style.setProperty('--pp-x', m + 'px');
			});

			// The block heading aligns with the top of the tilt line.
			var m0 = conf.tilt < 0 ? (n - 1) * (-conf.tilt) : 0;
			b.head.classList.add('pp-head');
			b.head.style.setProperty('--pp-x', m0 + 'px');
			wrap.style.setProperty('--pp-left', conf.left);
			wrap.style.setProperty('--pp-pull', conf.pull + 'px');
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('[data-typed]').forEach(typeOut);
		wireMenuToggle();
		wireWorkshopFlicker();
		wireHeadingGlitch();
		wirePeopleStagger();
	});
}());
