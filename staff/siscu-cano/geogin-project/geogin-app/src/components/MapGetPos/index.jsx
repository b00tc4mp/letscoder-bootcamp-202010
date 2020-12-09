import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'

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
      ? <Marker position={marker}>
        <Popup>Marker is at {marker}</Popup>
        </Marker>
      : <></>)
  }

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(
        position =>
          setPosition([position.coords.latitude, position.coords.longitude]))
    // setTimeout(() => map.locate({
    //   setView: true
    // }), 1000)
  }, [])

  return (
    position
      ? <MapContainer center={position} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Posicion actual donde estás.
          </Popup>
        </Marker>
        <MyMarker />
        </MapContainer>
      : <></>
  )
}
