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
		var browserMinWidth = $(window).width()
		if(browserMinWidth < 600){
			$(this).children().slideToggle(500);
			$(this).toggleClass('active');
		}
		else{
			$(this).children().show();
			$('.footer .title"').onclick=null;
		}
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
			var browserMinWidth = $(window).width()
			if(browserMinWidth > 600){
				$('.footer .title').children().show();
		}
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
		if($(".wrapper>.reviews__text").css('display') == 'block') $(".wrapper>.reviews__text").slideToggle(500);
		
		
	});
	$(".ls-nextSlide").click(function(){
		ReviewsSlider.goToNextSlide();
	 	if($(".wrapper>.reviews__text").css('display') == 'block') $(".wrapper>.reviews__text").slideToggle(500);
		
	});
	
	var put_value = function (value, self){
		
		$(".wrapper>.reviews__text").text(value);
		console.dir(self);
		return self;
	};
	var value, self;
	$(".reviews__box").click(function(e){
		var width = $(window).width();
		var position_click = event.pageX;
		var part =100*position_click/width;
		self = $(this);
		var elem = $(".wrapper>.reviews__text");
		if ($(this).hasClass('active')){
			$(".wrapper>.reviews__text").slideUp(500);
			$(".reviews__box").removeClass('active');
		}
		else{
			$(".reviews__box").removeClass('active');
			$(this).addClass('active');
			if($(elem).css('display') == 'none'){
			$(".wrapper>.reviews__text").slideDown(500);
			}
		}
		// if($(elem).css('display') == 'none'){
		// 	$(".wrapper>.reviews__text").slideDown(500);
		// 	self.addClass('active');
		// }
		// else{
		// 	$(".wrapper>.reviews__text").slideUp(500);
		// }
		
		if(part < 33) {
			elem.removeClass("show show-right").addClass("show-left");}
		else if(part < 66){
			elem.removeClass("show-left show-right").addClass("show");}
		else {
			elem.removeClass("show-left show").addClass("show-right");}
		
		value = $(this).children(".reviews__text").text();
	
		put_value(value,self);
		
	});
	// $(".reviews__box").next().click(function(e){
	// 	alert(1);
	// });
});
// $( window ).load(function() {
// 	SameHeight();
// });



