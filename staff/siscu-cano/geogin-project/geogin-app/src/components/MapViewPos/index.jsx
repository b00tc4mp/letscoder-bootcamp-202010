import React, { useEffect, useRef, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as L from 'leaflet'
import { MapViewPosWrapper } from './styles'
import { markerGame, markerUser } from './iconMarker.js'

const CustomReactPopup = ({ item }) => {
  console.log('game', item)
  return (
    <div className='popup-quest'>
      <div className='popup-quest__header'>
        <div className='popup-quest__image'>
          <img src={item.image} />
        </div>
      </div>
      <div className='popup-quest__body'>
        <p className='popup-quest__title'>{item.title}</p>
        <p className='popup-quest__description'>{item.description}</p>
      </div>
    </div>
  )
}

export const MapViewPos = ({ gameTests }) => {
  const mapRef = useRef(null)
  const layerRef = useRef(null)
  const markerRef = React.useRef(null)

  const [position, setPosition] = useState()

  // Posicionamiento jugador
  const onLocationFound = e => {
    const radius = e.accuracy
    L.marker(e.latlng, { icon: markerUser }).addTo(mapRef.current)
    //   .bindPopup('You are within ' + radius + ' meters from this point').openPopup()
    // L.circle(e.latlng, radius).addTo(mapRef.current)
  }

  // Error en geoposicionamiento
  function onLocationError (e) {
    window.alert(e.message)
  }

  // Fix zoom
  function _changeLocateMaxZoom (e) {
    if (mapRef.current.locateOptions) {
      mapRef.current.locateOptions.maxZoom = mapRef.current.getZoom()
    }
  }

  // add map
  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(position => {
        setPosition([position.coords.latitude, position.coords.longitude])
        mapRef.current = L.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          zoom: 16,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
          ]
        })

        mapRef.current.on('locationerror', onLocationError)
        mapRef.current.on('locationfound', (e, mapRef) =>
          onLocationFound(e, mapRef)
        )
        mapRef.current.on('zoomend', _changeLocateMaxZoom)
        mapRef.current.locate({
          setView: true,
          watch: true,
          maxZoom: 16,
          enableHighAccuracy: true,
          timeout: 30000
        })
        mapRef.current.createPane('fixed', document.getElementById('map'))
        layerRef.current = L.layerGroup().addTo(mapRef.current)

        gameTests &&
          gameTests.length &&
          layerRef &&
          layerRef.current &&
          gameTests.map(({ location: { coordinates } = {} }, index) => {
            const marker = L.marker([coordinates[0], coordinates[1]], {
              icon: markerGame
            }).addTo(layerRef.current)

            const popup = L.popup({
              pane: 'fixed',
              className: 'popup-fixed',
              autoPan: false
            }).setContent(
              ReactDOMServer.renderToString(
                <CustomReactPopup item={gameTests[index]} />
              )
            )

            marker.bindPopup(popup)
          })
      })
    return () => mapRef.current.remove()
  }, [])

  return (
    <MapViewPosWrapper>
      <div id='map' />
    </MapViewPosWrapper>
  )
}
