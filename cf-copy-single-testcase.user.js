// ==UserScript==
// @name         Codeforces Copy Single Testcase
// @namespace    http://tampermonkey.net/
// @version      2025-07-24
// @description  Copy single testcase on codeforces.
// @author       hikariyo
// @match        https://codeforces.com/contest/*/problem/*
// @match        https://codeforces.com/gym/*/problem/*
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
            const match = cls.match(/^test-example-line-(\d+)$/);
            if (!match) return;
            const num = match[1];
            const text = '1\n' + $('.' + cls).map(function(){
                return $(this).text().trim();
            }).get().join('\n');
            GM_setClipboard(text);
            Codeforces.showMessage(`Testcase ${num} has been copied into the clipboard`);
        });
    });
})();
