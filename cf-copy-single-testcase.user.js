// ==UserScript==
// @name         Codeforces Copy Single Testcase
// @namespace    http://tampermonkey.net/
// @version      2025-07-24
// @description  Copy single testcase on codeforces.
// @author       hikariyo
// @match        https://codeforces.com/contest/*/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @updateURL    https://raw.githubusercontent.com/hikariyo/cf-copy-single-testcase/refs/heads/master/cf-copy-single-testcase.user.js
// @downloadURL  https://raw.githubusercontent.com/hikariyo/cf-copy-single-testcase/refs/heads/master/cf-copy-single-testcase.user.js
// @license      MIT
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    $('.test-example-line').dblclick(function(){
        $(this).attr('class').split(' ').forEach(cls => {
            if (!/^test-example-line-(\d+)$/.test(cls)) return;
            const text = '1\n' + $('.' + cls).map(function(){
                return $(this).text().trim();
            }).get().join('\n');
            GM_setClipboard(text);
            console.log('Copied', text);
        });
    });
})();
