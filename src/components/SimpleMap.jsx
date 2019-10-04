import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

const SimpleMap = ({ each }) => {
  const [center, setCenter] = useState({ lat: 40.71086, lng: -74.00732 });
  const [zoom, setZoom] = useState(11);

  const createMarkers = markerslist => {
    return markerslist.map(each => {
      console.log(each);
      return <Marker lat={each.lat} lng={each.lng} text={each.text} />;
    });
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBwX-nbPm-Axp6pJ94BO-_WRKUYrWe5x9o' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {createMarkers(each)}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
