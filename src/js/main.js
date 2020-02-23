$(".header-wrapper__burger").click(function() {
	$(".header-wrapper__burger,.menu").toggleClass("active");
	$("body").toggleClass("lock");
	$(this).toggleClass("mobile-menu"); //скрипт для работы бургер меню
});

$(".product__button-buy").click(function() {
	$(".modal").css("display", "flex");
	$(".feedback-form").css("display", "flex");
	$("body").css("overflow","hidden");
	$(".feedback-form__button-close-form").click(function() {
		$(".feedback-form").css("display", "none");
		$(".modal").css("display", "none");
		$("body").css("overflow","");
	})
});

$(".product__button-more-detailed").click(function() {
	$(".modal").css("display", "flex");
	$(".about-on-product").css("display", "flex");
	$("body").css("overflow","hidden");
	$(".about-on-product__button-close").click(function() {
		$(".about-on-product").css("display", "none");
		$(".modal").css("display", "none");
		$("body").css("overflow","");
	})
});


$('.lightgallery').lightGallery({
	thumbnail:true
}); 

