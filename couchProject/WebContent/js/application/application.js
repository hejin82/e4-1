var center;
var map = null;

function Newinitialize(lat, lng) {
	center = new google.maps.LatLng(lat, lng);
	var myOptions = {
		zoom : 14,
		center : center,
		mapTypeId : google.maps.MapTypeId.SATELLITE
	};
	
	map = new google.maps.Map(document.getElementById("map_canvas"),
			myOptions);
	
	var testmarkerpos = new google.maps.LatLng(52.624875,-1.142332);

	var testmarker = new google.maps.Marker({
	position: testmarkerpos,
	map: map,
	animation: google.maps.Animation.DROP
	});

	var contentString1 = '<div id="content"><div id="siteNotice"><p class="info_box"><a href="#anotherpage">Hello Marker</a></p><p>Click for more information</p></div></div>';

	var infowindow1 = new google.maps.InfoWindow({
	content: contentString1,
	maxWidth: 200
	});

	google.maps.event.addListener(testmarker, 'click', function() {
	infowindow1.open(map,testmarker);
	});

}

function detectBrowser() {
	var useragent = navigator.userAgent;
	var mapdivMap = document.getElementById("map_canvas");

	if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1) {
		mapdivMap.style.width = '100%';
		mapdivMap.style.height = '100%';
	} else {
		mapdivMap.style.width = '600px';
		mapdivMap.style.height = '800px';
	}
};

$('.goMap').live('click', function() {
	if (navigator.geolocation) {
		detectBrowser();
		navigator.geolocation.getCurrentPosition(function(position) {
			Newinitialize(position.coords.latitude, position.coords.longitude);
		});
	} else {
		detectBrowser();
		Newinitialize(52.636161, -1.133065);
	}
});


/** For incidentForm.html page
jQuery(window).ready(function() {
	jQuery("#btnInit").click(initiate_geolocation);
});

function initiate_geolocation() {
	navigator.geolocation.getCurrentPosition(handle_geolocation_query,
			handle_errors);
}

function handle_errors(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		alert("user did not share geolocation data");
		break;

	case error.POSITION_UNAVAILABLE:
		alert("could not detect current position");
		break;

	case error.TIMEOUT:
		alert("retrieving position timed out");
		break;

	default:
		alert("unknown error");
		break;
	}
}

function handle_geolocation_query(position) {

	$('#lat').val(position.coords.latitude);
	$('#lon').val(position.coords.longitude);

}
*/