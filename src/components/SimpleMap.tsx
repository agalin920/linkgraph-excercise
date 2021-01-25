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
    let apiKey: string;
    if(process.env.MAPS_API_KEY){
      apiKey = process.env.MAPS_API_KEY;
    }
    return (
      <div style={{ height: '300px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey!}}
          defaultCenter={center}
          defaultZoom={2}
        >
        </GoogleMapReact>
      </div>
    );
}
 
export default SimpleMap;