import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";

const MapboxComponent = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  return (
    <Map
      initialViewState={{
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10,
      }}
      style={{ width: "100%", height: "500px" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onClick={(e) => setPosition({ lat: e.lngLat.lat, lng: e.lngLat.lng })}
    >
      {position && <Marker latitude={position.lat} longitude={position.lng} />}
    </Map>
  );
};

export default MapboxComponent;
