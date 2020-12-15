import React from 'react'

import { useBodyClass } from '../hooks/useBodyClass'
import { QrScanner } from '../components/QrScanner'

export const Ranking = () => {
  useBodyClass('ranking')
  const pepe = {
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
          title: '2',
          image: 'http://res.cloudinary.com/geogin/image/upload/v1608026122/img/z9vtnzymhzkxnmimsjdf.jpg',
          trickOne: '2',
          trickTwo: '2',
          trickThree: '2',
          _id: '5fd888153b569e0cfcc845bc',
          description: '2',
          qr: '52a3282e-3ddb-4371-875e-5c8cc57784cb',
          location: {
            type: 'Point',
            coordinates: [
              41.40989118782582,
              2.180580139029189
            ],
            _id: '5fd888153b569e0cfcc845bd'
          }
        },
        {
          title: '2',
          image: 'http://res.cloudinary.com/geogin/image/upload/v1608026122/img/z9vtnzymhzkxnmimsjdf.jpg',
          trickOne: '2',
          trickTwo: '2',
          trickThree: '2',
          _id: '5fd888153b569e0cfcc845bc',
          description: '2',
          qr: 'http://www.youtube.com/watch?v=S5KafuOcyn4',
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
    <>
      <QrScanner game={pepe} />
    </>
  )
}
