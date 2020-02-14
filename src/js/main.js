$(".header-wrapper__burger").click(function() {
	$(".header-wrapper__burger,.menu").toggleClass("active");
	$("body").toggleClass("lock");
	$(this).toggleClass("mobile-menu");
	// if ($(this).css("position") == "relative") {
	// 	$(this).css("position","fixed");
	// }
	// else {
	// 	$(this).css("position","relative");
	// }
});

