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
			// else{
			// 	$('.colection-nike').css('height',400);
			// }
		}
		$(window).resize(function(){
			SameHeight();
		});




});


