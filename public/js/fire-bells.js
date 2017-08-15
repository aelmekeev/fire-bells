var MAP_CENTER_LAT = 56.632057;
var MAP_CENTER_LNG = 47.882995;
var MAP_ZOOM = 8;

var THUMBNAIL_SIZE = 40;
var THUMBNAIL_SPRITE = 'images/thumbnails/sprite.png';

var data = [{
  name: 'пгт Новый Торъял',
  lat: 57.018685,
  lng: 48.723789,
  link: 'images/1.jpg'
}, {
  name: 'д. Котёново',
  lat: 56.385812,
  lng: 46.868391,
  link: 'images/2.jpg'
}, {
  name: 'д. Умятеево',
  lat: 56.411598,
  lng: 46.863652,
  link: 'images/3.jpg'
}, {
  name: 'д. Яныково',
  lat: 56.623333,
  lng: 47.771667,
  link: 'images/4.jpg'
}, {
  name: 'д. Ноля-Вершина',
  lat: 56.616833,
  lng: 47.787667,
  link: 'images/5.jpg'
}, {
  name: 'д. Крутой Овраг',
  lat: 56.633667,
  lng: 47.741833,
  link: 'images/6.jpg'
}, {
  name: 'д. Нолька',
  lat: 56.640833,
  lng: 47.695000,
  link: 'images/7.jpg'
}, {
  name: 'д. Ореховка',
  lat: 56.634667,
  lng: 47.682667,
  link: 'images/8.jpg'
}, {
  name: 'д. Юркино',
  lat: 56.513264,
  lng: 46.222819,
  link: 'images/9.jpg'
}, {
  name: 'с. Марьино',
  lat: 56.570790,
  lng: 46.011371,
  link: 'images/10.jpg'
}, {
  name: 'д. Сенюшкино',
  lat: 56.416818,
  lng: 46.718342,
  link: 'images/11.jpg'
}, {
  name: 'д. Воробьи',
  lat: 56.957222,
  lng: 47.864584,
  link: 'images/12.jpg'
}, {
  name: 'пгт Новый Торъял',
  lat: 56.998928,
  lng: 48.719967,
  link: 'images/13.jpg'
}, {
  name: 'с. Горняк',
  lat: 56.860162,
  lng: 49.054310,
  link: 'images/14.jpg'
}, {
  name: 'сады «Дружба»',
  lat: 56.587025,
  lng: 47.783367,
  link: 'images/15.jpg'
}, {
  name: 'д. Митюково',
  lat: 56.613267,
  lng: 47.816094,
  link: 'images/16.jpg'
}, {
  name: 'д. Верхнее Азяково',
  lat: 56.624716,
  lng: 47.625608,
  link: 'images/17.jpg'
}, {
  name: 'д. Сенькино',
  lat: 56.677333,
  lng: 47.915000,
  link: 'images/18.jpg'
}, {
  name: 'д. Большой Шаплак',
  lat: 56.710667,
  lng: 47.904667,
  link: 'images/19.jpg'
}, {
  name: 'д. Юркино',
  lat: 56.702333,
  lng: 47.926667,
  link: 'images/20.jpg'
}, {
  name: 'д. Малая Орша',
  lat: 56.908619,
  lng: 47.839890,
  link: 'images/21.jpg'
}, {
  name: 'д. Дементьево',
  lat: 56.885548,
  lng: 48.927828,
  link: 'images/22.jpg'
}, {
  name: 'с. Нурма',
  lat: 56.705500,
  lng: 47.712833,
  link: 'images/23.jpg'
}, {
  name: 'д. Нефедкино',
  lat: 56.700500,
  lng: 47.696333,
  link: 'images/24.jpg'
}, {
  name: 'д. Данилкино',
  lat: 56.692000,
  lng: 47.713333,
  link: 'images/25.jpg'
}, {
  name: 'д. Большой Яшнур',
  lat: 56.684000,
  lng: 47.729333,
  link: 'images/26.jpg'
}, {
  name: 'п. Зелёная Роща',
  lat: 56.515790,
  lng: 48.336888,
  link: 'images/27.jpg'
}, {
  name: 'с. Азаново',
  lat: 56.719122,
  lng: 48.223535,
  link: 'images/28.jpg'
}, {
  name: 'д. Малый Шаплак',
  lat: 56.7666111,
  lng: 47.9323097,
  link: 'images/29.jpg'
}, {
  name: 'д. Савкино Поле',
  lat: 56.77299,
  lng: 47.9026839,
  link: 'images/30.jpg'
}, {
  name: 'д. Акиндулкино',
  lat: 56.7745678,
  lng: 47.9663981,
  link: 'images/31.jpg'
}];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: MAP_ZOOM,
    center: {
      lat: MAP_CENTER_LAT,
      lng: MAP_CENTER_LNG
    }
  });

  for (var i = 0; i < data.length; i++) {
    var bell = data[i];
    var icon = {
      url: THUMBNAIL_SPRITE,
      size: new google.maps.Size(THUMBNAIL_SIZE, THUMBNAIL_SIZE),
      origin: new google.maps.Point(THUMBNAIL_SIZE * i, 0)
    };
    var marker = new google.maps.Marker({
      position: {
        lat: bell.lat,
        lng: bell.lng
      },
      map: map,
      icon: icon
    });

    addListeners(marker, bell);
  }

  function addListeners(marker, bell) {
    marker.addListener('click', function() {
      // todo
    });
  }
}
