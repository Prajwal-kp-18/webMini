// components/MapComponent.js
"use client";
import React from "react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon URLs
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Define Romania's tourist spots as JSON
const romanianTouristSpots = [
  {
    id: "1",
    name: "Bran Castle",
    latitude: "45.5156",
    longitude: "25.3676",
    description: "Famous for Dracula legends.",
  },
  {
    id: "2",
    name: "Peles Castle",
    latitude: "45.3596",
    longitude: "25.5426",
    description: "Neo-Renaissance architecture.",
  },
  {
    id: "3",
    name: "Sighisoara",
    latitude: "46.2194",
    longitude: "24.7933",
    description: "Medieval city and UNESCO site.",
  },
  {
    id: "4",
    name: "Transfagarasan Highway",
    latitude: "45.5987",
    longitude: "24.6167",
    description: "Scenic mountain road.",
  },
  {
    id: "5",
    name: "Danube Delta",
    latitude: "45.1667",
    longitude: "29.2667",
    description: "Biodiversity-rich wetlands.",
  },
];

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map centered on Romania
    if (!mapRef.current) {
      const map = L.map("map").setView([45.9432, 24.9668], 6);
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Add markers for each tourist spot
      romanianTouristSpots.forEach((spot) => {
        L.marker([parseFloat(spot.latitude), parseFloat(spot.longitude)])
          .addTo(map)
          .bindPopup(
            `<h3 class="text-lg font-semibold">${spot.name}</h3><p>${spot.description}</p>`
          );
      });

      // Add a circle around the center of Romania
      L.circle([45.9432, 24.9668], {
        color: "blue", // Circle color
        fillColor: "#blue", // Fill color (optional)
        fillOpacity: 0.1, // Fill opacity (optional)
        radius: 300000, // Circle radius in meters (adjust as needed)
      }).addTo(map);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "550px", // Full viewport height
        width: "100%", // Full width
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="leaflet-container"
    >
      {!mapRef.current && (
        <p className="font-extrabold text-5xl text-center">Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
