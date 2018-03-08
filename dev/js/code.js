$(function(){

	//burger bittons and menu
	$('.bars').click(function(){
		$(this).toggleClass('active');
		$(".nav").animate(
			{height: 'toggle'},
			{duration:300}
		);
	})
	
	// for footer
	$(".footer .title").click(function(){
		$(this).toggleClass("bottom")
		$(this).children().slideToggle(500);
	
	
	});
	//end for footer

	
	$('span.icon.icon_user').click(function(){
		$(this).toggleClass('active');
		$(".header__user_menu").fadeIn(500)
		$(".header__nav").css("opacity",0)
		$(".header__user_menu").mouseleave(function(){
			$(".header__user_menu").fadeOut(0);
			$(".header__nav").css("opacity",1)
		})
	});
	
	//slider reviews
	var ReviewsSlider=$('#ReviewsSlider').lightSlider({
		item: 3,
		controls:false,
		slideMove:1,
		responsive:[
			{
				breakpoint: 600,
				settings:{
					item:1,
					slideMove:1,
				}
			}
		],
	})
	$(".ls-prevSlide").click(function(){
		ReviewsSlider.goToPrevSlide();
		$(".wrapper>.reviews__text").removeClass("show");
	});
	$(".ls-nextSlide").click(function(){
		ReviewsSlider.goToNextSlide();
		$(".wrapper>.reviews__text").removeClass("show");
	});
	
	$(".reviews__box").click(function(){
		$(".wrapper>.reviews__text").toggleClass("show");
		var value = $(this).children(".reviews__text").text();
		//console.log()
		$(".wrapper>.reviews__text").text(value);
		
	});

});


