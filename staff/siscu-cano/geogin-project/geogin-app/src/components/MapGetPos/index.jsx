import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { markerUser, markerGame } from './iconMarker'

// TileLayer
const URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

const URLGAME = 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
const ATTRIBUTIONGAME = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

export const MapGetPos = () => {
  const [marker, setMarker] = useState()
  const [position, setPosition] = useState()
  let map

  const MyMarker = () => {
    map = useMapEvents({
      click (e) {
        const newMarker = e.latlng
        console.log('newMarker', newMarker)
        setMarker(newMarker)
      }
    })
    return (marker
      ? <Marker position={marker} icon={markerGame}>
        <Popup>Marker is at {marker}</Popup>
      </Marker>
      : <></>)
  }

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(
        position =>
          setPosition([position.coords.latitude, position.coords.longitude]))
  }, [])

  return (
    position
      ? <MapContainer center={position} zoom={13} scrollWheelZoom>
        <TileLayer url={URL} attribution={ATTRIBUTION} />
        <Marker icon={markerUser} position={position}>
          <Popup>
            Posicion actual donde estás.
          </Popup>
        </Marker>
        <MyMarker />
      </MapContainer>
      : <></>
  )
}
