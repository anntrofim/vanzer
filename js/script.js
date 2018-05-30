
$(document).ready(function($) {

// $('.autoplay-i').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 5000,
// 	dots: true,
// 	pauseOnHover: true,
// 	arrows: false,
// });
// $('.autoplay-w').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 5000,
// 	dots: true,
// 	pauseOnHover: true,
// 	arrows: false,
// });
$('.autoplay-p').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	pauseOnHover: true,
	arrows: false,
	// focusOnSelect: true,
	// centerMode: true
});

$("#fullpage").fullpage({
	scrollingSpeed: 700,
	verticalCentered: false,
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'],
	sectionsColor: ['#474747', '#fff', '#474747', '#474747', '#fff', '#474747'],

	afterLoad: function(anchorLink, index) {
		var isAnimatedHeader = $('.header .is-animated');

		if(index == 1){
			isAnimatedHeader.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1s'}); // nav
			isAnimatedHeader.eq(1).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedHeader.eq(2).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // subtitle
			isAnimatedHeader.eq(3).addClass('animated fadeInLeft').css({'animation-delay': '2s', 'animation-duration': '1s'}); // btn
			isAnimatedHeader.eq(4).addClass('animated fadeInRight').css({'animation-delay': '2.5s', 'animation-duration': '1s'}); // soc fb
			isAnimatedHeader.eq(5).addClass('animated fadeInRight').css({'animation-delay': '2.7s', 'animation-duration': '1s'}); // soc tw
			isAnimatedHeader.eq(6).addClass('animated fadeInRight').css({'animation-delay': '2.9s', 'animation-duration': '1s'}); // soc dr
			isAnimatedHeader.eq(7).addClass('animated fadeInRight').css({'animation-delay': '3.1s', 'animation-duration': '1s'}); // soc be
		}
	},

	onLeave: function(index, nextIndex, direction) {

		var isAnimatedAbout = $('.about .is-animated'),
		isAnimatedServices = $('.services .is-animated'),
		isAnimatedPortfolio = $('.portfolio .is-animated'),
		isAnimatedBlog = $('.blog .is-animated'),
		isAnimatedContact = $('.contact .is-animated');
		// 'use strict';

		if(nextIndex == 2) {
			isAnimatedAbout.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1s'}); // img-1
			isAnimatedAbout.eq(1).addClass('animated fadeInRight').css({'animation-delay': '.5s', 'animation-duration': '1s'}); // img-2
			isAnimatedAbout.eq(2).addClass('animated fadeInDown').css({'animation-delay': '1s', 'animation-duration': '1.5s'}); //title
			isAnimatedAbout.eq(3).addClass('animated fadeInUp').css({'animation-delay': '1.5s'}); // txt
		}

		if(nextIndex == 3) {
			isAnimatedServices.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedServices.eq(1).addClass('animated fadeInLeft').css({'animation-delay': '1s', 'animation-duration': '1s'}); // cat-1
			isAnimatedServices.eq(2).addClass('animated fadeInLeft').css({'animation-delay': '1.2s', 'animation-duration': '1s'}); // cat-2
			isAnimatedServices.eq(3).addClass('animated fadeInLeft').css({'animation-delay': '1.4s', 'animation-duration': '1s'}); // cat-3
			isAnimatedServices.eq(4).addClass('animated fadeInUp').css({'animation-delay': '1.6s', 'animation-duration': '1s'}); // desc
		}

		if(nextIndex == 4) {
			isAnimatedPortfolio.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedPortfolio.eq(1).addClass('animated fadeIn').css({'animation-delay': '1.5s', 'animation-duration': '1.5s'}); // slider
		}

		if(nextIndex == 5) {
			isAnimatedBlog.eq(0).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedBlog.eq(1).addClass('animated fadeIn').css({'animation-delay': '1.2s', 'animation-duration': '1.5s'}); // pic-title
			isAnimatedBlog.eq(2).addClass('animated fadeInRight').css({'animation-delay': '1.6s', 'animation-duration': '1s'}); // article
			isAnimatedBlog.eq(3).addClass('animated fadeInRight').css({'animation-delay': '1.6s', 'animation-duration': '1s'}); // article
		}

		if(nextIndex == 6) {
			// isAnimatedContact.eq(0).addClass('animated fadeInRight').css({'animation-delay': '0s', 'animation-duration': '1.5s'}); // map
			isAnimatedContact.eq(1).addClass('animated fadeInDown').css({'animation-delay': '.5s', 'animation-duration': '1.5s'}); // title
			isAnimatedContact.eq(2).addClass('animated fadeIn').css({'animation-delay': '1s', 'animation-duration': '1.5s'}); // data
			isAnimatedContact.eq(3).addClass('animated fadeInUp').css({'animation-delay': '1.2s', 'animation-duration': '1.5s'}); // copyright
			isAnimatedContact.eq(4).addClass('animated fadeInRight').css({'animation-delay': '1.5s', 'animation-duration': '1s'}); // form
		}
	}
});



function rotateArticle() {

if (current == 1) {
	$("#blogArticle-1").removeClass("non-at-active-bottom non-at-active-top").addClass("at-active");
	$("#blogArticle-2").removeClass("at-active non-at-active-bottom").addClass("non-at-active-top");
	$("#blogArticle-3").removeClass("at-active non-at-active-top").addClass("non-at-active-bottom");
} else if (current == 2) {
	$("#blogArticle-1").removeClass("at-active non-at-active-top").addClass("non-at-active-bottom");
	$("#blogArticle-2").removeClass("non-at-active-bottom non-at-active-top").addClass("at-active");
	$("#blogArticle-3").removeClass("at-active non-at-active-bottom").addClass("non-at-active-top");
} else {
	$("#blogArticle-1").removeClass("at-active non-at-active-bottom").addClass("non-at-active-top");
	$("#blogArticle-2").removeClass("at-active non-at-active-top").addClass("non-at-active-bottom");
	$("#blogArticle-3").removeClass("non-at-active-bottom non-at-active-top").addClass("at-active");
}
}

$(".blog__article").click(function() {
current = this.id.substr(12);

rotateArticle();
});


$('#btnDisableFP').on( "click", destroyFP);

function destroyFP() {
$("#fullpage").fullpage.destroy();
$('body').css("overflow-x","hidden");
}

});

function initMap() {
var vanzerOffice = {lat: 51.523834, lng: -0.158443};
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
	center: {lat: 51.521367, lng: -0.1560130},
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

