"use strict";$(document).ready((function(){$(".mobile-menu__burger").click((function(){$(".mobile-menu__burger,.mobile-menu__menu").hasClass("active")?($(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active"),unlockBody()):($(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active"),lockBody())}))})),$(".product__button-buy").click((function(){$(".modal").css("top","0"),$(".about-on-product").css("display","none"),$(".feedback-form").css("display","flex"),lockBody(),$(".feedback-form__button-close-form").click((function(){$(".modal").css("top","-100%"),setTimeout((function(){"-100%"==$(".modal").css("top")&&$(".feedback-form").css("display","none")}),100),unlockBody()}))})),$(".product__button-more-detailed").click((function(){$(".modal").css("top","0"),$(".feedback-form").css("display","none"),$(".about-on-product").css("display","flex"),lockBody(),$(".about-on-product__button-close").click((function(){$(".modal").css("top","-100%"),setTimeout((function(){"-100%"==$(".modal").css("top")&&$(".about-on-product").css("display","none")}),100),unlockBody()}))})),$(".lightgallery").lightGallery({thumbnail:!0}),$(document).ready((function(){$(".light-slider").lightSlider({item:1,auto:!1,controls:!0,adaptiveHeight:!0,pager:!0,prevHtml:'<div class="nextSlide">&#8249;</div>',nextHtml:'<div class="nextSlide">&#8250;</div>'})})),$((function(){$(window).width()<=768&&$(".mobile-menu__punkt").click((function(){var o=$(this).attr("href");return $(".mobile-menu__burger,.mobile-menu__menu").toggleClass("active"),unlockBody(),$("html, body").animate({scrollTop:$(o).offset().top+"px"}),!1})),$(".menu__href").click((function(){var o=$(this).attr("href");return $("html, body").animate({scrollTop:$(o).offset().top+"px"}),!1}))})),/iPhone/i.test(navigator.userAgent)&&$(window).resize((function(){$(".modal").height($(window).height())}));var currentСoordinate=0;function lockBody(){currentСoordinate=window.pageYOffset,$("body").css({height:"100%",overflow:"hidden",width:"100%",position:"fixed",top:-currentСoordinate}),document.querySelector("body").scrollTop=currentСoordinate,document.querySelector("html,body").scrollTop=currentСoordinate}function unlockBody(){$("body").css({height:"",overflow:"",width:"",position:"",top:""}),document.querySelector("body").scrollTop=currentСoordinate,document.querySelector("html,body").scrollTop=currentСoordinate}