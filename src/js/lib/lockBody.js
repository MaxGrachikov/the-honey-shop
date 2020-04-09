let currentСoordinate = 0;

function lockBody() {
	currentСoordinate = window.pageYOffset;
	$('body').css({
		"height":"100%",
		"overflow":"hidden",
		"width":"100%",
		"position":"fixed",
		"top": -currentСoordinate
	});
	document.querySelector("body").scrollTop = currentСoordinate;
	document.querySelector("html,body").scrollTop = currentСoordinate;
}

function unlockBody() {
	$('body').css({
		"height":"",
		"overflow":"",
		"width":"",
		"position":"",
		"top": ""
	});
		document.querySelector("body").scrollTop = currentСoordinate;
		document.querySelector("html,body").scrollTop = currentСoordinate;
}
