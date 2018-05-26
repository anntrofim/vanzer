$(window).on("resize", function(event){
	if($(window).width() < 768) {
		$("#fullpage").fullpage.setAllowScrolling(false);
		console.log($(window).width())
	} else{

	}
});

$(document).ready(function($) {


	if($(window).width() > 768) {
								// alert($(window).width())
								$("#fullpage").fullpage({
										// setAutoScrolling(true),
										scrollingSpeed: 0,
										verticalCentered: false,
										navigation: true,
										navigationPosition: 'left',
										navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
										sectionsColor : ['#474747', '#fff', '#474747', '#474747', '#fff', '#474747'],


									});
							} else {
								// alert($(window).width())
								$("#fullpage").fullpage.setAllowScrolling(false);

							}



							$('.autoplay').slick({
								slidesToShow: 3,
								slidesToScroll: 1,
								autoplay: true,
								autoplaySpeed: 3000,
								dots: true,
								pauseOnHover: false,
								arrows: false,
				// centerMode: true,
				// infinite: true,
				// speed: 300,
				// slidesToShow: 1,
				// adaptiveHeight: true
			});


						});
function initMap() {

	var vanzerOffice = {lat: 50.465920, lng: 30.514891};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: 50.461520, lng: 30.526543},
				// mapTypeControl: false,
				styles: [
				{
					elementType: 'geometry',
					stylers: [{color: '#f5f5f5'}]
				},
				{
					elementType: 'labels.icon',
					stylers: [{visibility: 'off'}]
				},
				{
					elementType: 'labels.text.fill',
					stylers: [{color: '#616161'}]
				},
				{
					elementType: 'labels.text.stroke',
					stylers: [{color: '#f5f5f5'}]
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'labels.text.fill',
					stylers: [{color: '#bdbdbd'}]
				},
				{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [{color: '#eeeeee'}]
				},
				{
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [{color: '#757575'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [{color: '#e5e5e5'}]
				},
				{
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#ffffff'}]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.text.fill',
					stylers: [{color: '#757575'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#dadada'}]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [{color: '#616161'}]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				},
				{
					featureType: 'transit.line',
					elementType: 'geometry',
					stylers: [{color: '#e5e5e5'}]
				},
				{
					featureType: 'transit.station',
					elementType: 'geometry',
					stylers: [{color: '#eeeeee'}]
				},
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#c9c9c9'}]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9e9e9e'}]
				}
				]
			});
var markerIcon = "icons/map-marker.svg";
var marker = new google.maps.Marker({
	icon: markerIcon,
	position: vanzerOffice,
	map: map
});




}
