import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const Map = () => {
    const defaultCenter = { lat: 41.48527092931998, lng: 2.042291434562671 };
    
    const defaultOptions = { scrollwheel: false };
    
    const RegularMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={ defaultCenter }
          defaultOptions={ defaultOptions }
        >
          <Marker position={ defaultCenter } />
        </GoogleMap>
      ))
    );
    
    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { height: '280px' };
    const mapElementStyle = { height: '100%' };

  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
  );
}

export default Map
