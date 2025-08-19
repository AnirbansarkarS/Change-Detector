// Initialize the map
var map = L.map('map').setView([22.5726, 88.3639], 13); // Kolkata coords by default

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker example
var marker = L.marker([22.5726, 88.3639]).addTo(map);
marker.bindPopup("<b>Welcome to Kolkata!</b><br>This will be your test region.").openPopup();

// Example polygon (for marking a "changed" area)
var polygon = L.polygon([
    [22.58, 88.36],
    [22.58, 88.38],
    [22.56, 88.38],
    [22.56, 88.36]
]).addTo(map);

polygon.bindPopup("Detected Change Area 🚨");

// Example interaction: On click, show lat/lng
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng.toString());
});
