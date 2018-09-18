import styles from './maps/styles';

function initMap(){

  const coords = {
    lat: 19.427025,
    lng: -99.167665
  };

  let map = new google.maps.Map(document.getElementById('mapa'),{
    center: coords,
    zoom: 17,
    styles: styles
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: 'Facilito Store'
  })

}


initMap();
