function initMap() {
  var locations = [
    ["Chaudron <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8931188, 55.49162849999993],
    ["Trinité <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8948895, 55.46516180000003],
    ["Champ Fleuri <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎‎", -20.8857654, 55.46626689999994],
    ["La Montagne <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.9012914, 55.4084034],
    ["Le Moufia <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.9106808, 55.48316610000006],
    ["Bois de Nèfles <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.8885043, 55.45804810000004],
    ["Le Butor <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8883845, 55.47070120000001],
    ["Les Camélias <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.8947435, 55.461699899999985],
    ["Domenjod <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.9157612, 55.50533029999997],
    ["La Grande Chaloupe <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9040455, 55.398167899999976],
    ["Montgaillard‎ <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9058911, 55.46793149999996],
    ["Petite Île <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8806737, 55.44290590000003],
    ["La Providence <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9043277, 55.45546880000006],
    ["Quartier Saint-Jacques <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>‎", -20.8768526, 55.44847200000004],
    ["Ruisseau des Noirs <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8873627, 55.453785100000005],
    ["Saint François <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9250592, 55.45546880000006],
    ["Sainte-Clotilde‎ <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9190923, 55.48593630000005],
    ["La Source‎ <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8908983, 55.4481131],
    ["Bas de la Rivière‎ <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.8844545, 55.44508450000001],
    ["Le Brûlé‎ <br> <img src='../site-stdenis/images/barachois.jpg' class='resize' alt=''>  <br> <a href='../site-stdenis/quartier/chaudron.html'>voir le site dédié au chaudron</a>", -20.9212428, 55.43885460000001],

  ];

  var stdenis = {
    lat: -20.8906596,
    lng: 55.45505359999993
  };
  var infowindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: stdenis,
    styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }
    ]
  });

  function placeMarker(loc) {
    var latLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: '../site-stdenis/images/icon/city.png'
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent("<div id='infowindow'>" + loc[0] + "</div>");
      infowindow.open(map, marker);
    });

  }

  for (var i = 0; i < locations.length; i++) {
    placeMarker(locations[i]);
  }

  // icon perso

  /*function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  }*/
}