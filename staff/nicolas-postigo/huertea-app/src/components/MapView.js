import React, { useState, useEffect } from "react";
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import { places } from '../assets/data.json'
import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";


function MapView({  }) {
    const [state, setState] = useState({
        currentLocation: {lat: '41.65606', lng: '-0.87734'},
        zoom: 13
    });

    return <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
        <Markers places={places}></Markers>
    </MapContainer>

}

export default MapView