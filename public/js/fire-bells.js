var MAP_CENTER_LAT = 56.632057;
var MAP_CENTER_LNG = 47.882995;
var MAP_ZOOM = 8;

var THUMBNAIL_SIZE = 40;
var THUMBNAIL_SPRITE = 'images/thumbnails/sprite.png';

var data = [{
  name: 'пгт Новый Торъял',
  lat: 57.018685,
  lng: 48.723789,
  link: 'images/001.jpg'
}, {
  name: 'д. Котёново',
  lat: 56.385812,
  lng: 46.868391,
  link: 'images/002.jpg'
}, {
  name: 'д. Умятеево',
  lat: 56.411598,
  lng: 46.863652,
  link: 'images/003.jpg'
}, {
  name: 'д. Яныково',
  lat: 56.623333,
  lng: 47.771667,
  link: 'images/004.jpg'
}, {
  name: 'д. Ноля-Вершина',
  lat: 56.616833,
  lng: 47.787667,
  link: 'images/005.jpg'
}, {
  name: 'д. Крутой Овраг',
  lat: 56.633667,
  lng: 47.741833,
  link: 'images/006.jpg'
}, {
  name: 'д. Нолька',
  lat: 56.640833,
  lng: 47.695000,
  link: 'images/007.jpg'
}, {
  name: 'д. Ореховка',
  lat: 56.634667,
  lng: 47.682667,
  link: 'images/008.jpg'
}, {
  name: 'д. Юркино',
  lat: 56.513264,
  lng: 46.222819,
  link: 'images/009.jpg'
}, {
  name: 'с. Марьино',
  lat: 56.570790,
  lng: 46.011371,
  link: 'images/010.jpg'
}, {
  name: 'д. Сенюшкино',
  lat: 56.416818,
  lng: 46.718342,
  link: 'images/011.jpg'
}, {
  name: 'д. Воробьи',
  lat: 56.957222,
  lng: 47.864584,
  link: 'images/012.jpg'
}, {
  name: 'пгт Новый Торъял',
  lat: 56.998928,
  lng: 48.719967,
  link: 'images/013.jpg'
}, {
  name: 'с. Горняк',
  lat: 56.860162,
  lng: 49.054310,
  link: 'images/014.jpg'
}, {
  name: 'сады «Дружба»',
  lat: 56.587025,
  lng: 47.783367,
  link: 'images/015.jpg'
}, {
  name: 'д. Митюково',
  lat: 56.613267,
  lng: 47.816094,
  link: 'images/016.jpg'
}, {
  name: 'д. Верхнее Азяково',
  lat: 56.624716,
  lng: 47.625608,
  link: 'images/017.jpg'
}, {
  name: 'д. Сенькино',
  lat: 56.677333,
  lng: 47.915000,
  link: 'images/018.jpg'
}, {
  name: 'д. Большой Шаплак',
  lat: 56.710667,
  lng: 47.904667,
  link: 'images/019.jpg'
}, {
  name: 'д. Юркино',
  lat: 56.702333,
  lng: 47.926667,
  link: 'images/020.jpg'
}, {
  name: 'д. Малая Орша',
  lat: 56.908619,
  lng: 47.839890,
  link: 'images/021.jpg'
}, {
  name: 'д. Дементьево',
  lat: 56.885548,
  lng: 48.927828,
  link: 'images/022.jpg'
}, {
  name: 'с. Нурма',
  lat: 56.705500,
  lng: 47.712833,
  link: 'images/023.jpg'
}, {
  name: 'д. Нефедкино',
  lat: 56.700500,
  lng: 47.696333,
  link: 'images/024.jpg'
}, {
  name: 'д. Данилкино',
  lat: 56.692000,
  lng: 47.713333,
  link: 'images/025.jpg'
}, {
  name: 'д. Большой Яшнур',
  lat: 56.684000,
  lng: 47.729333,
  link: 'images/026.jpg'
}, {
  name: 'п. Зелёная Роща',
  lat: 56.515790,
  lng: 48.336888,
  link: 'images/027.jpg'
}, {
  name: 'с. Азаново',
  lat: 56.719122,
  lng: 48.223535,
  link: 'images/028.jpg'
}, {
  name: 'д. Малый Шаплак',
  lat: 56.7666111,
  lng: 47.9323097,
  link: 'images/029.jpg'
}, {
  name: 'д. Савкино Поле',
  lat: 56.77299,
  lng: 47.9026839,
  link: 'images/030.jpg'
}, {
  name: 'д. Акиндулкино',
  lat: 56.7745678,
  lng: 47.9663981,
  link: 'images/031.jpg'
}, {
  name: 'д. Люльпаны',
  lat: 56.8249022,
  lng: 47.5592619,
  link: 'images/032.jpg'
}, {
  name: 'д. Малая Речка',
  lat: 56.8431608,
  lng: 47.5313681,
  link: 'images/033.jpg'
}, {
  name: 'с. Алексеиха',
  lat: 56.9035478,
  lng: 47.3815747,
  link: 'images/034.jpg'
}, {
  name: 'д. Большие Памъялы',
  lat: 56.706354,
  lng: 46.663207,
  link: 'images/035.jpg'
}];

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
    center: [MAP_CENTER_LAT, MAP_CENTER_LNG],
    zoom: MAP_ZOOM,
    controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'rulerControl']
  });

  var dimension = Math.ceil(Math.sqrt(data.length));
  for (var i = 0; i < data.length; i++) {
    var bell = data[i];
    var thumbnail = new ymaps.Placemark([bell.lat, bell.lng], {
      hintContent: bell.name,
	  link: bell.link
    }, {
      iconLayout: 'default#image',
      iconImageClipRect: [
        [THUMBNAIL_SIZE * Math.floor(i % dimension), THUMBNAIL_SIZE * Math.floor(i / dimension)],
        [THUMBNAIL_SIZE * Math.floor(i % dimension) + THUMBNAIL_SIZE, THUMBNAIL_SIZE * Math.floor(i / dimension) + THUMBNAIL_SIZE]
      ],
      iconImageHref: THUMBNAIL_SPRITE,
      iconImageSize: [THUMBNAIL_SIZE, THUMBNAIL_SIZE]
    });
    thumbnail.events.add(['click'], function(e) {
      var data = e.originalEvent.target.properties._data;
      $('#lightbox-link').attr({
        href: data.link,
        'data-lightbox': data.hintContent,
		'data-title': data.hintContent
      });
      $('#lightbox-link').trigger('click');
    });
    myMap.geoObjects.add(thumbnail);
  }
});
