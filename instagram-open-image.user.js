// ==UserScript==
// @name         Open Instagram Image on Middle-Click
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Middle-click an Instagram image to open it in a new tab
// @match        https://www.instagram.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('mousedown', e => {
        if (e.button === 1 && e.target.classList.contains('_aagw')) {
            const img = e.target.closest('div._aagu')?.querySelector('img');
            if (img && img.src) {
                window.open(img.src, '_blank');
            }
        }
    }, true);
})();
