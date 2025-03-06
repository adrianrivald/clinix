import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  console.log(position, "position");

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng); // Get lat & lng on click
      },
    });
    return position ? <Marker position={position} /> : null;
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
