import { call } from 'geogin-utils'
import { API_URL } from '../config'

// import { validatePicture } from './helpers/validations'

export default function (picture, callback) {
//   validatePicture(picture)
  const reader = new window.FileReader()
  reader.readAsBinaryString(picture[0])

  reader.onerror = function () {
    throw new Error('File cannot be opened')
  }

  reader.onload = function () {
    const imageBase64 = window.btoa(reader.result)
    let imageBase64Wrapper = `data:image/gif;base64,${imageBase64}`

    imageBase64Wrapper = imageBase64Wrapper.replace(/(\r\n|\n|\r)/gm, '')

    call('POST', `${API_URL}/image-upload`,
      { 'Content-type': 'application/json' },
      JSON.stringify({ data: imageBase64Wrapper }),
      (status, response) => {
        if (status === 0) {
          return callback(new Error('server error'))
        } else if (status !== 201) {
          const { error } = JSON.parse(response)
          return callback(new Error(error))
        }
        const res = JSON.parse(response)
        callback(null, res.uploadResponse.url)
      })
  }
}
