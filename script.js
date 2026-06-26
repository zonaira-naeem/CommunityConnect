// Create the map
const map = L.map('map').setView([31.5204, 74.3587], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample issue markers
L.marker([31.5204, 74.3587])
    .addTo(map)
    .bindPopup("<b>Broken Streetlight</b><br>Verified");

L.marker([31.5255, 74.3500])
    .addTo(map)
    .bindPopup("<b>Missing Crosswalk</b><br>High Priority");

L.marker([31.5150, 74.3650])
    .addTo(map)
    .bindPopup("<b>Illegal Dumping</b><br>Reported");