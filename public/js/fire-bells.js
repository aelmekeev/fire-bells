var THUMBNAIL_SIZE = 40;
var THUMBNAIL_SPRITE = 'https://dl.dropboxusercontent.com/u/14032692/blog/Fire-bells/thumbnails/firebellsprite.png';

var data = [{
  lat: 57.018685,
  lng: 48.723789,
  link: 'http://fire-bells.blogspot.ru/2014/03/blog-post.html'
}, {
  lat: 56.385812,
  lng: 46.868391,
  link: 'http://fire-bells.blogspot.ru/2014/07/blog-post.html'
}, {
  lat: 56.411598,
  lng: 46.863652,
  link: 'http://fire-bells.blogspot.ru/2014/07/blog-post_4.html'
}, {
  lat: 56.623333,
  lng: 47.771667,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_6693.html'
}, {
  lat: 56.616833,
  lng: 47.787667,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_23.html'
}, {
  lat: 56.633667,
  lng: 47.741833,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_24.html'
}, {
  lat: 56.640833,
  lng: 47.695000,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_25.html'
}, {
  lat: 56.634667,
  lng: 47.682667,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_26.html'
}, {
  lat: 56.513264,
  lng: 46.222819,
  link: 'http://fire-bells.blogspot.ru/2014/08/blog-post.html'
}, {
  lat: 56.570790,
  lng: 46.011371,
  link: 'http://fire-bells.blogspot.ru/2014/08/blog-post_16.html'
}, {
  lat: 56.416818,
  lng: 46.718342,
  link: 'http://fire-bells.blogspot.ru/2014/08/blog-post_84.html'
}, {
  lat: 56.957222,
  lng: 47.864584,
  link: 'http://fire-bells.blogspot.ru/2014/05/blog-post.html'
}, {
  lat: 56.998928,
  lng: 48.719967,
  link: 'http://fire-bells.blogspot.ru/2013/10/blog-post.html'
}, {
  lat: 56.860162,
  lng: 49.054310,
  link: 'http://fire-bells.blogspot.ru/2014/09/blog-post.html'
}, {
  lat: 56.587025,
  lng: 47.783367,
  link: 'http://fire-bells.blogspot.ru/2014/05/blog-post_26.html'
}, {
  lat: 56.613267,
  lng: 47.816094,
  link: 'http://fire-bells.blogspot.ru/2014/05/blog-post_27.html'
}, {
  lat: 56.624716,
  lng: 47.625608,
  link: 'http://fire-bells.blogspot.ru/2014/04/blog-post.html'
}, {
  lat: 56.677333,
  lng: 47.915000,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post.html'
}, {
  lat: 56.710667,
  lng: 47.904667,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_16.html'
}, {
  lat: 56.702333,
  lng: 47.926667,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_17.html'
}, {
  lat: 56.908619,
  lng: 47.839890,
  link: 'http://fire-bells.blogspot.ru/2014/10/blog-post_27.html'
}, {
  lat: 56.885548,
  lng: 48.927828,
  link: 'http://fire-bells.blogspot.ru/2014/10/blog-post.html'
}, {
  lat: 56.705500,
  lng: 47.712833,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_18.html'
}, {
  lat: 56.700500,
  lng: 47.696333,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_19.html'
}, {
  lat: 56.692000,
  lng: 47.713333,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_20.html'
}, {
  lat: 56.684000,
  lng: 47.729333,
  link: 'http://fire-bells.blogspot.ru/2013/09/blog-post_1317.html'
}, {
  lat: 56.515790,
  lng: 48.336888,
  link: 'http://fire-bells.blogspot.ru/2016/04/blog-post.html'
}, {
  lat: 56.719122,
  lng: 48.223535,
  link: 'http://fire-bells.blogspot.ru/2016/04/blog-post_14.html'
}, {
  lat: 56.7666111,
  lng: 47.9323097,
  link: 'http://fire-bells.blogspot.ru/2016/05/blog-post.html'
}, {
  lat: 56.77299,
  lng: 47.9026839,
  link: 'http://fire-bells.blogspot.ru/2016/05/blog-post_3.html'
}, {
  lat: 56.7745678,
  lng: 47.9663981,
  link: 'http://fire-bells.blogspot.ru/2016/05/blog-post_83.html'
}];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {
      lat: 56.632057,
      lng: 47.882995
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
      window.open(bell.link);
    });
  }
}
