const URL = 'https://api.airtable.com/v0/appIqynBuQ0qF9dTc/Data?maxRecords=1000&view=Grid%20view'
const KEY = 'keyCGSJ1JKlY0t7kU'

const MAP_CENTER_LAT = 56.632057
const MAP_CENTER_LNG = 47.882995
const MAP_ZOOM = 8

const THUMBNAIL_SIZE = 40
const THUMBNAIL_SPRITE = 'images/thumbnails/sprite.png'

ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
        center: [MAP_CENTER_LAT, MAP_CENTER_LNG],
        zoom: MAP_ZOOM,
        controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'rulerControl']
    })

    const request = new Request(URL)
    request.headers.set('Authorization', `Bearer ${KEY}`)
    fetch(request)
        .then(res => res.json())
        .then(res => {
            const data = res.records
            const dimension = Math.ceil(Math.sqrt(data.length))
            data.forEach((row, i) => {
                const bell = row.fields
                const thumbnail = new ymaps.Placemark([bell.lat, bell.lng], {
                    hintContent: bell.place,
                    href: bell.photo[0].url
                }, {
                    iconLayout: 'default#image',
                    iconImageClipRect: [
                        [THUMBNAIL_SIZE * Math.floor(i % dimension), THUMBNAIL_SIZE * Math.floor(i / dimension)],
                        [THUMBNAIL_SIZE * Math.floor(i % dimension) + THUMBNAIL_SIZE, THUMBNAIL_SIZE * Math.floor(i / dimension) + THUMBNAIL_SIZE]
                    ],
                    iconImageHref: THUMBNAIL_SPRITE,
                    iconImageSize: [THUMBNAIL_SIZE, THUMBNAIL_SIZE]
                })
                thumbnail.events.add(['click'], e => {
                    const d = e.originalEvent.target.properties._data
                    $('#lightbox-link')
                        .attr({
                            href: d.href,
                            'data-lightbox': d.hintContent,
                            'data-title': d.hintContent
                        })
                        .trigger('click')
                })
                myMap.geoObjects.add(thumbnail)
            })
        })
})
