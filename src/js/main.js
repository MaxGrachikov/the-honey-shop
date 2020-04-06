$(document).ready(function() { // скрипт для работы бургер меню
	$(".mobile-menu__burger").click(function() {
	if($(".mobile-menu__burger,.mobile-menu__menu").hasClass("active")) { // если меню находится в открытом состоянии
		$(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active");
		unlockBody();
	}
	else {
		$(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active");  // если меню находится в закрытом состоянии
		lockBody();
		}
	});
});

$(".product__button-buy").click(function() { // функция кнопки открытия формы обратной связи
	$(".modal").css("display", "flex");
	$(".feedback-form").css("display", "flex");
	lockBody();
	$(".feedback-form__button-close-form").click(function() {
		$(".feedback-form").css("display", "none");
		$(".modal").css("display", "none");
		unlockBody();
	})
});

$(".product__button-more-detailed").click(function() { // функция кнопки открытия формы о продукте
	$(".modal").css("display", "flex");
	$(".about-on-product").css("display", "flex");
	lockBody();
	$(".about-on-product__button-close").click(function() {
		$(".about-on-product").css("display", "none");
		$(".modal").css("display", "none");
		unlockBody();
	})
});

$('.lightgallery').lightGallery({ // настройки галереи
	thumbnail: true
});

$(document).ready(function() { // настройки слайдера
    $(".light-slider").lightSlider({
    	item: 1,
    	auto: false,
    	controls: true,
    	adaptiveHeight: true,
    	pager: true,
    	prevHtml: '<div class="nextSlide">&#8249;</div>',
    	nextHtml: '<div class="nextSlide">&#8250;</div>',
    }); 
});

$(function(){ // скрипт для работы плавных якорей
	if($(window).width() <= 768) {
		$(".mobile-menu__punkt").click(function(){
		    let _href = $(this).attr("href");
		    $(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active");
		    unlockBody();
		    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		    return false;
    	});
	}
	$(".menu__href").click(function(){
    	let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


$(window).resize(function(){ // костыль для правильного отображения модальных окно под Safari
	$(".modal").height($(window).height());
});