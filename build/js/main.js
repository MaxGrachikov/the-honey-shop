"use strict";$(".header-wrapper__burger").click((function(){$(".header-wrapper__burger,.menu").toggleClass("active"),$("body").toggleClass("lock"),$(this).toggleClass("mobile-menu")})),$(".product__button-buy").click((function(){$(".modal").css("display","flex"),$(".feedback-form").css("display","flex"),$("body").css("overflow","hidden"),$(".feedback-form__button-close-form").click((function(){$(".feedback-form").css("display","none"),$(".modal").css("display","none"),$("body").css("overflow","")}))})),$(".product__button-more-detailed").click((function(){$(".modal").css("display","flex"),$(".about-on-product").css("display","flex"),$("body").css("overflow","hidden"),$(".about-on-product__button-close").click((function(){$(".about-on-product").css("display","none"),$(".modal").css("display","none"),$("body").css("overflow","")}))})),$(".lightgallery").lightGallery({thumbnail:!0}),$(document).ready((function(){$(".light-slider").lightSlider({item:1,auto:!1,controls:!0,adaptiveHeight:!0,pager:!0,prevHtml:'<div class="nextSlide">&#8249;</div>',nextHtml:'<div class="nextSlide">&#8250;</div>'})})),$((function(){$("a[href^='.']").click((function(){var e=$(this).attr("href");return $(".header-wrapper__burger,.menu").toggleClass("active"),$("body").toggleClass("lock"),$(".header-wrapper__burger").toggleClass("mobile-menu"),$("html, body").animate({scrollTop:$(e).offset().top+"px"}),!1}))}));