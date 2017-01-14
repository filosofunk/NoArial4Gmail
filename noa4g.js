// ==UserScript==
// @name         Gmail font change
// @namespace    http://filosofunk.com/
// @version      0.2
// @description  Changes the diaplay font in Gmail to Roboto, Verdana, sans-serif
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

sheet.insertRule("body, td, select, textarea { font-family : Roboto,Verdana,sans-serif !important; }", 0);
sheet.insertRule("input[name='subjectbox'] { font-family : Roboto,Verdana,sans-serif !important; font-weight: bold; }", 0);
