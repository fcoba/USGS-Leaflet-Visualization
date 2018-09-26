//Initialize leaflet (html canvas)
var map = L.map('map').setView([0.0, 0.0], 2);

//Let's make the map. 
var basemap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17, attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)' }).addTo( map );

//Let's define the points
earthquakes.features.forEach(earthquake => {
    var latitude = +earthquake.geometry.coordinates[1];
    var longitude = +earthquake.geometry.coordinates[0];
    var magnitude = +earthquake.properties.mag;

    L.circle([latitude, longitude], {
        // color: "red",
        stroke: false,
        fillColor: "blue",
        fillOpacity: magnitude/10,
        radius: 60000 * magnitude // in meters
    }).bindTooltip(earthquake.properties.title, {
        permenant:false
    }).addTo(map);

});




  


