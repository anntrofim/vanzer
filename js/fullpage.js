// $(window).scroll(function(){
	// 	if($('.services').visible()) {
	// 		alert("visible");
	// 	}
	// });

jQuery(document).ready(function($) {
	$("#fullpage").fullpage({
		scrollingSpeed: 700,
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
		sectionsColor : ['#474747', '#fff', '#474747', '#474747', '#fff', '#474747'],
	});
});
