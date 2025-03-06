import { useEffect, useRef, useState } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
        script.async = true;
        script.onload = () => initMap();
        document.body.appendChild(script);
      }
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 10,
      });

      map.addListener("click", (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setCoordinates({ lat, lng });

        // Remove old marker
        if (marker) {
          marker.setMap(null);
        }

        // Place new marker
        const newMarker = new window.google.maps.Marker({
          position: { lat, lng },
          map,
        });

        setMarker(newMarker);
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div>
      <h2>Click on the Map to Get Coordinates</h2>
      <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
      <p>
        {coordinates.lat && coordinates.lng
          ? `Latitude: ${coordinates.lat}, Longitude: ${coordinates.lng}`
          : "Click on the map to get coordinates."}
      </p>
    </div>
  );
};

export default GoogleMap;
