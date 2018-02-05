var map;

function initMap() {

	var mainLocation = { lat: 55.687085, lng: 37.562749 };

    var locations = [
        mainLocation,
        { lat: 55.688, lng: 37.564 },
        { lat: 55.689, lng: 37.563 },
        { lat: 55.686, lng: 37.561 }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        center: mainLocation,
        zoom: 17,
        zoomControl: true,
   		zoomControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER },
   		streetViewControl: true,
        streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_TOP },
    });

    var markerImage = 'src/icons/map-marker.png';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: 'src/icons/marker-clusterer/m'});
}