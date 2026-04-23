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

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('[data-typed]').forEach(typeOut);
		wireMenuToggle();
	});
}());
