$(".header-wrapper__burger").click(function() {
	$(".header-wrapper__burger,.menu").toggleClass("active");
	$("body").toggleClass("lock");
	$(this).toggleClass("mobile-menu"); //скрипт для работы бургер меню
});

$(".product__button-buy").click(function() {
	$(".modal-wrapper").css("display", "flex");
	$(".feedback-form").css("display", "flex");
	$("body").css("overflow","hidden");
	$(".feedback-form__button-close-form").click(function() {
		$(".feedback-form").css("display", "none");
		$(".modal-wrapper").css("display", "none");
		$("body").css("overflow","");
	})
});

$(".product__button-more-detailed").click(function() {
	$(".modal-wrapper").css("display", "flex");
	$(".about-on-product").css("display", "flex");
	$("body").css("overflow","hidden");
	$(".about-on-product").click(function() {
		$(".about-on-product").css("display", "none");
		$(".modal-wrapper").css("display", "none");
		$("body").css("overflow","");
	})
});