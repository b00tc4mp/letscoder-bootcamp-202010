import L from 'leaflet'
import markerUserSvg from '../../assets/svg/marker-user.svg'
import markerGameSvg from '../../assets/svg/marker-game.svg'

const markerUser = new L.Icon({
  iconUrl: markerUserSvg,
  iconRetinaUrl: markerUserSvg,
  iconSize: new L.Point(50, 75)
})

const markerGame = new L.Icon({
  iconUrl: markerGameSvg,
  iconRetinaUrl: markerGameSvg,
  iconSize: new L.Point(50, 75)
})

export { markerUser, markerGame }
