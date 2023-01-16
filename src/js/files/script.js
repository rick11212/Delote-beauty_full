// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.initMap = function () {
	const t = { lat: 59.960747, lng: 29.990282 },
		e = new google.maps.Map(document.getElementById("map"), {
			zoom: 8,
			center: t,
			styles: [
				{ elementType: "geometry", stylers: [{ color: "#333333" }] },
				{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
				{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
				{
					featureType: "administrative.locality",
					elementType: "labels.text.fill",
					stylers: [{ color: "#B0A48A" }],
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [{ color: "#333333" }],
				},
				{
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [{ color: "#333333" }],
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [{ color: "#333333" }],
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [{ color: "#38414e" }],
				},
				{
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [{ color: "#212a37" }],
				},
				{
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [{ color: "#9ca5b3" }],
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [{ color: "#746855" }],
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{ color: "#1f2835" }],
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [{ color: "#f3d19c" }],
				},
				{
					featureType: "transit",
					elementType: "geometry",
					stylers: [{ color: "#2f3948" }],
				},
				{
					featureType: "transit.station",
					elementType: "labels.text.fill",
					stylers: [{ color: "#d59563" }],
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [{ color: "#525252" }],
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [{ color: "#515c6d" }],
				},
				{
					featureType: "water",
					elementType: "labels.text.stroke",
					stylers: [{ color: "#525252" }],
				},
			],
		});
};

//window.initMap = initMap;
