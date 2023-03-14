import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import mapDiv from '../../styles/components/station/stationMap.styles';
import MapProps from '../../types/components/station/stationMap.type';

function StationMap({ lat, lng }: MapProps) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: '' });

  if (!isLoaded) {
    return <div className={mapDiv} />;
  }

  return (
    <div className={mapDiv}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat, lng }}
        zoom={17}
        clickableIcons={false}
        options={{ fullscreenControl: false }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </div>
  );
}

export default StationMap;
