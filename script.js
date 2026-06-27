// ===== CommunityPulse Custom Markers =====

const redIcon = new L.Icon({
    iconUrl: 'images/markers/marker-icon-red.png',
    shadowUrl: 'images/markers/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const blueIcon = new L.Icon({
    iconUrl: 'images/markers/marker-icon-blue.png',
    shadowUrl: 'images/markers/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
    iconUrl: 'images/markers/marker-icon-green.png',
    shadowUrl: 'images/markers/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const violetIcon = new L.Icon({
    iconUrl: 'images/markers/marker-icon-violet.png',
    shadowUrl: 'images/markers/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
// Create the map
const map = L.map('map').setView([40.0000, -100.0000], 15);

const issueTitle = document.getElementById("issue-title");
const issueStatus = document.getElementById("issue-status");
const issueVerifications = document.getElementById("issue-verifications");

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
// Safety Issue
const safetyMarker = L.marker([40.0015, -100.0020], {
    icon: redIcon
}).addTo(map);

safetyMarker.bindPopup(`
    <b>🚸 Missing Crosswalk</b><br>
    📍 Harmony Hills High School<br><br>

    <strong>Status:</strong> Verified<br>
    <strong>Priority:</strong> High<br><br>

    <button onclick="window.location.href='issues.html'">
        View Details
    </button>
`);

safetyMarker.on("click", function () {

    issueTitle.textContent = "Missing Crosswalk";

    issueStatus.textContent = "Safety • Verified • High Priority";

    issueVerifications.textContent = "14 Community Verifications";

});

const infrastructureMarker = L.marker([39.9988, -99.9985], {
    icon: blueIcon
}).addTo(map);

infrastructureMarker.bindPopup(`
    <b>💡 Broken Streetlight</b><br>
    📍 Downtown Square<br><br>

    <strong>Status:</strong> Verified<br>
    <strong>Priority:</strong> Medium<br><br>

    <button onclick="window.location.href='issues.html'">
        View Details
    </button>
`);

infrastructureMarker.on("click", function () {

    issueTitle.textContent = "Broken Streetlight";

    issueStatus.textContent = "Infrastructure • Verified • Medium Priority";

    issueVerifications.textContent = "8 Community Verifications";

});

const environmentMarker = L.marker([40.0025, -99.9965], {
    icon: greenIcon
}).addTo(map);

environmentMarker.bindPopup(`
    <b>🌿 Illegal Dumping</b><br>
    📍 River Walk<br><br>

    <strong>Status:</strong> Reported<br>
    <strong>Priority:</strong> Medium<br><br>

    <button onclick="window.location.href='issues.html'">
        View Details
    </button>
`);

environmentMarker.on("click", function () {

    issueTitle.textContent = "Illegal Dumping";

    issueStatus.textContent = "Environment • Reported • Medium Priority";

    issueVerifications.textContent = "12 Community Verifications";

});

const accessibilityMarker = L.marker([39.9975, -100.0030], {
    icon: violetIcon
}).addTo(map);

accessibilityMarker.bindPopup(`
    <b>♿ Damaged Sidewalk</b><br>
    📍 Maple Grove<br><br>

    <strong>Status:</strong> Investigating<br>
    <strong>Priority:</strong> High<br><br>

    <button onclick="window.location.href='issues.html'">
        View Details
    </button>
`);

accessibilityMarker.on("click", function () {

    issueTitle.textContent = "Damaged Sidewalk";

    issueStatus.textContent = "Accessibility • Investigating • High Priority";

    issueVerifications.textContent = "6 Community Verifications";

});
// ===== Filter Functionality =====

const safetyCheckbox = document.getElementById("safety");
const infrastructureCheckbox = document.getElementById("infrastructure");
const environmentCheckbox = document.getElementById("environment");
const accessibilityCheckbox = document.getElementById("accessibility");

const applyButton = document.getElementById("applyFilters");

applyButton.addEventListener("click", function () {

    // Show or hide Safety marker
    if (safetyCheckbox.checked) {
        map.addLayer(safetyMarker);
    } else {
        map.removeLayer(safetyMarker);
    }

    // Show or hide Infrastructure marker
    if (infrastructureCheckbox.checked) {
        map.addLayer(infrastructureMarker);
    } else {
        map.removeLayer(infrastructureMarker);
    }

    // Show or hide Environment marker
    if (environmentCheckbox.checked) {
        map.addLayer(environmentMarker);
    } else {
        map.removeLayer(environmentMarker);
    }

    // Show or hide Accessibility marker
    if (accessibilityCheckbox.checked) {
        map.addLayer(accessibilityMarker);
    } else {
        map.removeLayer(accessibilityMarker);
    }

});
// ===== Search Functionality =====

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const search = searchInput.value.toLowerCase();

        if (search.includes("crosswalk")) {

            map.setView([40.0015, -100.0020], 17);
            safetyMarker.openPopup();
            safetyMarker.fire("click");

        }

        else if (search.includes("streetlight")) {

            map.setView([39.9988, -99.9985], 17);
            infrastructureMarker.openPopup();
            infrastructureMarker.fire("click");

        }

        else if (search.includes("dump")) {

            map.setView([40.0025, -99.9965], 17);
            environmentMarker.openPopup();
            environmentMarker.fire("click");

        }

        else if (search.includes("sidewalk")) {

            map.setView([39.9975, -100.0030], 17);
            accessibilityMarker.openPopup();
            accessibilityMarker.fire("click");

        }

        else {

            alert("No matching issue found.");

        }

    }

});