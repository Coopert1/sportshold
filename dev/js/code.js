$(function(){

	//burger bittons and menu
	$('.bars').click(function(){
		$(this).toggleClass('active');
		$(".nav").animate(
			{height: 'toggle'},
			{duration:300}
		);
	})
	
	//footer
	$(".footer .title").click(function(){
		$(this).children().slideToggle(500);
	
	});
})