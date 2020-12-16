import React, { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as L from 'leaflet'
import { MapViewPosWrapper } from './styles'

const CustomReactPopup = () => {
  const game = {
    _id: '5fd888153b569e0cfcc845be',
    players: [],
    qrCode: 'http://localhost:4000/api/game/5fd888153b569e0cfcc845be',
    teams: [],
    quest: {
      _id: '5fd887c03b569e0cfcc845b7',
      modePrivate: true,
      kidsOk: true,
      evaluations: [],
      coverImg: 'http://res.cloudinary.com/geogin/image/upload/v1608026045/img/w3voka5oknze4ajdkufn.png',
      tests: [
        {
          title: 'La misión en el paque de las aguas de Barcelona',
          image: 'https://res.cloudinary.com/geogin/image/upload/e_art:incognito/v1608059455/img/fl2mipzuxnobdyljtw9j.jpg',
          trickOne: '2',
          trickTwo: '2',
          trickThree: '2',
          _id: '5fd888153b569e0cfcc845bc',
          description: 'Todo transcurre en las cercanias de la parada de metro de alfonso X, ubicada en el centrico barrio de Gracia. Una de las misiones será encontrar donde se ubica la magica señora del agua.',
          qr: '52a3282e-3ddb-4371-875e-5c8cc57784cb',
          location: {
            type: 'Point',
            coordinates: [
              41.40989118782582,
              2.180580139029189
            ],
            _id: '5fd888153b569e0cfcc845bd'
          }
        }
      ],
      owner: '5fd6a2ff76d7ba5e82285a53',
      createdAt: '2020-12-15T09:54:08.318Z',
      updatedAt: '2020-12-15T09:55:33.422Z',
      __v: 1,
      description: 'aa',
      endLocation: {
        type: 'Point',
        coordinates: [
          41.423025494898525,
          2.2200622557284078
        ],
        _id: '5fd887dc3b569e0cfcc845b9'
      },
      homeLocation: {
        type: 'Point',
        coordinates: [
          41.45623570965278,
          2.1625556944491113
        ],
        _id: '5fd887dc3b569e0cfcc845b8'
      },
      time: '22:22',
      title: 'aa'
    },
    progress: [],
    organizer: '5fd6a2ff76d7ba5e82285a53',
    createdAt: '2020-12-15T09:55:33.456Z',
    updatedAt: '2020-12-15T09:55:33.479Z',
    __v: 0
  }
  return (
    <div className='popup-quest'>
      <div className='popup-quest__header'>
        <div className='popup-quest__image'>
          <img src={game.quest.tests[0].image} />
        </div>
      </div>
      <div className='popup-quest__body'>
        <p className='popup-quest__title'>{game.quest.tests[0].title}</p>
        <p className='popup-quest__description'>{game.quest.tests[0].description}</p>
      </div>
    </div>

  )
}

export const MapViewPos = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13)

    const pane = map.createPane('fixed', document.getElementById('map'))
    const marker = L.marker([51.5, -0.09]).addTo(map)
    const marker2 = L.marker([51.51, -0.09]).addTo(map)
    const popup = L.popup({
      pane: 'fixed', // Указываем нужный pane
      className: 'popup-fixed',
      autoPan: false
    }).setContent(ReactDOMServer.renderToString(<CustomReactPopup />))
    const popup2 = L.popup({
      pane: 'fixed', // Указываем нужный pane
      className: 'popup-fixed',
      autoPan: false
    }).setContent(ReactDOMServer.renderToString(<CustomReactPopup />))
    marker.bindPopup(popup)
    marker2.bindPopup(popup2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  }, [])

  return (
    <MapViewPosWrapper>
      <div id='map' />
    </MapViewPosWrapper>
  )
}
