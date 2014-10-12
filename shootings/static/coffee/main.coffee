config = require './config.coffee'
$(document).ready ->
    map = L.mapbox.map('map', 'examples.map-i86nkdio', {zoomControl: false})
    map.setView(config.MAP_CENTER, config.MAP_ZOOM)
