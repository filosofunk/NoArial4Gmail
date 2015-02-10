// ==UserScript==
// @name         Gmail font change
// @namespace    http://filosofunk.com/
// @version      0.1
// @description  Changes the diaplay font in Gmail to Verdana, sans-derif
// @author       Michael Funk
// @match        https://mail.google.com/* 
// @grant        none
// ==/UserScript==

var sheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

sheet.insertRule("body, td, input, select, textarea { font-family : Verdana,sans-serif !important; font-size : 100%; }", 0);
