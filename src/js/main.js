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
	$(".modal").css("top","0");
	$(".about-on-product").css("display", "none"); // убираем окно о продукте
	$(".feedback-form").css("display", "flex");
	lockBody();
	$(".feedback-form__button-close-form").click(function() {
		$(".modal").css("top","-100%"); 
		setTimeout(function() {
			if ($(".modal").css("top") == "-100%")  $(".feedback-form").css("display", "none");
		}, 100);
		unlockBody();
	})
});

$(".product__button-more-detailed").click(function() { // функция кнопки открытия формы о продукте
	$(".modal").css("top","0");
	$(".feedback-form").css("display", "none"); // убираем форму обратной связи
	$(".about-on-product").css("display", "flex"); 
	lockBody();
	$(".about-on-product__button-close").click(function() {
		$(".modal").css("top","-100%");
		setTimeout(function() {
			if ($(".modal").css("top") == "-100%") $(".about-on-product").css("display", "none");
		}, 100);
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




if (/iPhone/i.test(navigator.userAgent)) { // костыль для правильного отображения модальных окно под Iphone с учётом панели
	$(window).resize(function(){
		$(".modal").height($(window).height());
	});
}