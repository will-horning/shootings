(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MAP_CENTER;

MAP_CENTER = [38.907, -77.0368];

module.exports = {
  MAP_CENTER: MAP_CENTER,
  MAP_ZOOM: 11,
  DEFAULT_IMAGE_URL: '/static/images/lenfant_map.jpg',
  DEFAULT_OPACITY: 0.5,
  DEFAULT_BOUNDS: [[MAP_CENTER[0] - 0.1, MAP_CENTER[1] - 0.1], [MAP_CENTER[0] + 0.2, MAP_CENTER[1] + 0.1]],
  NOMINATIM_URL: 'http://nominatim.openstreetmap.org/'
};



},{}],2:[function(require,module,exports){
var config;

config = require('./config.coffee');

$(document).ready(function() {
  var map;
  map = L.mapbox.map('map', 'examples.map-i86nkdio', {
    zoomControl: false
  });
  return map.setView(config.MAP_CENTER, config.MAP_ZOOM);
});



},{"./config.coffee":1}]},{},[2]);
