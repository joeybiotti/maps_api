function initMap() {
    //Map options
    var nash = { lat: 36.1627, lng: -86.7816 }

    //New map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: nash
    });

    /*
    //Add marker
    var marker = new google.maps.Marker({
        position: {lat:36.3231, lng:-86.7133},
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Goodlettsville, Tenn.</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    */

    //Marker Coords
    addMarker({
        cords: { lat: 36.3231, lng: -86.7133 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        title: 'Goodlettsville'
    });
    addMarker({
        cords: { lat: 36.5298, lng: -87.3595 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        title: 'Hendersonville'
    });
    addMarker({
        cords: { lat: 35.9251, lng: -86.8689 },
        title: 'Gallatin'
    });
    addMarker({
        cords: { lat: 35.8456, lng: -86.3903 },
        title: 'Franklin'
    });
    addMarker({
        cords: { lat: 36.3884, lng: -86.4467 },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        title: 'Murfreesboro'
    });



    //Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            map: map,
            position: props.cords,
            animation: google.maps.Animation.DROP,
            draggable: true,
            icon: props.iconImage
        });
        marker.addListener('click', toggleBounce);

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

    };
}