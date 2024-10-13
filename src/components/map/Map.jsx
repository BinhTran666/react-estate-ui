import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import { createRoot } from 'react-dom/client';
import Pin from '../pin/Pin';

// Override default icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
});

function Map({items}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // If the map is already initialized, do nothing
      return;
    }

    // Initialize the map
    mapRef.current = L.map('map', {
      center: [51.505, -0.09], // Initial center of the map
      zoom: 7, // Initial zoom level
      zoomControl: true, // Enable zoom controls
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);
    
    const popupContainer = document.createElement('div');

    const root = createRoot(popupContainer);
    root.render(<div>ddddd</div>);

    L.marker([51.505, -0.09]).addTo(mapRef.current)
      .bindPopup(popupContainer)
      .openPopup();

    // Cleanup function to remove the map instance
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: '100vh' }}></div>;
}

export default Map;