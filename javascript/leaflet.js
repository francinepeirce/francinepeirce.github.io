const map = L.map('map').setView([43.642567, //latitude
-79.387054], //longitude
    13);    //zoom

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([43.642567, -79.387054]).addTo(map);