import React from 'react';
import GoogleMapReact from 'google-map-react';

interface SimpleMapsProps {
  center: Center
}

interface Center {
  lat: number,
  lng: number,
}
 
function SimpleMap({center}: SimpleMapsProps) {
    return (
      <div style={{ height: '100px', width: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'someKey'}}
          defaultCenter={center}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
}
 
export default SimpleMap;