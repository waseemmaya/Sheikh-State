var map;

function initMap(lat, long) {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: lat, lng: long },
    zoom: 8
  });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function runMap() {
  navigator.geolocation.getCurrentPosition(pos => {
    var crd = pos.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    initMap(crd.latitude, crd.longitude);
  });
}

