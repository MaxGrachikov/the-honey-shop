$(".header-wrapper__burger").click(function() {
	$(".header-wrapper__burger,.menu").toggleClass("active");
});

// Фикс меню для мобил
$(".header-wrapper__burger").on("click", function() {
	if($("header").css("position") == "relative") {
		$("header").css("position", "static");
	}
	else {
		$("header").css("position", "relative");
	}

})
