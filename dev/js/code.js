$(function(){
	SameHeight();

	//burger buttons and menu
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
		function SameHeight() {
		var browserMinWidth = $(window).width()
			if (browserMinWidth > 600) {
				$('.colection-nike').css('height', $('.col2').height());
			}
		}
		$(window).resize(function(){
			SameHeight();
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
	
	$(".reviews__box").click(function(e){
		var width = $(window).width();
		
		
		$(".wrapper>.reviews__text").toggleClass("show");
		var value = $(this).children(".reviews__text").text();
		//console.log()
		$(".wrapper>.reviews__text").text(value);
		
	});
});


