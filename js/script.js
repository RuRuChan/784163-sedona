function initMap() {
  // The location of place
  var place = {lat: 34.8697395, lng: -111.7609896};
  // The map, centered at place
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: place});
  // The marker, positioned at place
  var marker = new google.maps.Marker({position: place, map: map});
};