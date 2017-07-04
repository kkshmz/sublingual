var Instafeed = require("instafeed.js");
var gm = require('googlemaps');
var Waypoint = require('waypoints/lib/noframework.waypoints.js');
// var Waypoint = require("../../node_modules/waypoints/lib/noframework.waypoints.js");

var loadButton = document.getElementById('insta-btn');
var feed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        userId: '2952085850',
        accessToken: '2952085850.1677ed0.f8f9a9502a73462286e96148fb03df71',
        sortBy: 'most-recent',
        limit: '6',
        links: 'true',
        resolution: 'standard_resolution',
        template: '<div class="insta-item">' + '<a class="lazyload" href="{{link}}">' + '<img src="{{image}}">' + '</a>' + '</div>', 
        filter: function(image) {
            return image.type === 'image';
        },
    })
    //run the feed
feed.run();

var sticky = new Waypoint({
    element: $('.nav-bar')[0],
    handler: function(direction) {
        if (direction == 'down') {
            $("fixed").toggleClass;
        } else if (direction == 'up') {
            $("fixed").removeClass;
        }

    }
})




// googleMapsClient.createClient({
//     key: ''
// })
// GoogleMapsLoader.KEY = 'AIzaSyD2-PfxBnXkBINYrhu5XEDmBggbOon70Mw';

// key: 'AIzaSyD2-PfxBnXkBINYrhu5XEDmBggbOon70Mw'

// var gmAPI = new GoogleMapsAPI();
// z
// var googleMapsClient = require('@google/maps').createClient({
// 	key:'AIzaSyD2-PfxBnXkBINYrhu5XEDmBggbOon70Mw'
// })
// googleMapsClient.geocode({
// 	address: ''
// })


// 35.6687251,139.6526166,