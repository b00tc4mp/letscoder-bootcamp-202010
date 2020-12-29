module.exports = file =>
  new Promise(resolve => {
    const dataURL = window.URL.createObjectURL(file)

    const img = new Image()
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width
      })
    }
    img.src = dataURL
  })

  // Sample
  // (async () => {
  //   const dimensions = await getDimensionImage(picture[0])
  //   console.log('Dimensions:', dimensions)
  // })()