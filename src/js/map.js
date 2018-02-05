var map;

function initMap() {

	var locations = {lat: 55.687085, lng: 37.562749};

    map = new google.maps.Map(document.getElementById('map'), {
        center: locations,
        zoom: 17
    });

	//var markerImage = '../icons/map-marker.png';

	var markerImage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	
	var marker = new google.maps.Marker({
		position: locations,
		map: map,
		icon: markerImage
	});

}

