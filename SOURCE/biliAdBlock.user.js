// ==UserScript==
// @name         哔哩哔哩adblock
// @namespace    https://redroadsl.github.io/
// @version      0.1
// @description  AdBlock
// @author       Redroadsl
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //推广
    var ad=document.getElementById("reportFirst2");
    console.log(ad);
    ad.style.display="none";
    //横幅广告
    var ad2f=document.getElementById("bili_live");
    var ad2=ad2f.firstChild;
    console.log(ad2);
    ad2.style.display="none";
})();
