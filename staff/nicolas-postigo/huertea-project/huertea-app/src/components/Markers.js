import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'
import { places } from '../assets/data.json'
const Markers = ({ places }) => {

    const markers = places.map((places, i) => (
        <Marker
            key={i}
            position={places.geometry}
            icon={IconLocation}>
        </Marker>


    ));
 
    return markers

};

export default Markers