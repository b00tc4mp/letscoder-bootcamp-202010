import React from 'react'
import { Pane, Rectangle, MapContainer, Marker, Popup, TileLayer, LayersControl, Circle, LayerGroup, Polygon } from 'react-leaflet'
import L from 'leaflet'

export const MapViewPos = () => {
  // TileLayer
  // const URL = 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
  // const ATTRIBUTION = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const position = [51.505, -0.09]
  const center = [51.505, -0.09]
  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12]
  ]
  const text = L.divIcon({ html: '<div>Your HTML text here</div>', className: 'text-below-marker' })

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <LayersControl position='topright' id='lc1'>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {/* Radio buttons */}
        <LayersControl.BaseLayer name='OpenStreetMap.Mapnik'>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name='OpenStreetMap.BlackAndWhite'>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
          />
        </LayersControl.BaseLayer>

        {/* CheckBox */}
        <LayersControl.Overlay checked name='Prueba 1'>
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: 'blue' }}
              radius={200}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: 'red' }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: 'green', fillColor: 'green' }}
                radius={100}
              />
              <Polygon
                color='blue' positions={polygon}
              >
                <Marker position={center} icon={text} />
              </Polygon>
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl>

      <Pane name='yellow-rectangle' style={{ zIndex: 499 }}>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Pane>
    </MapContainer>
  )
}
