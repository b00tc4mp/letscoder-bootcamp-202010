const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')
const cloud = require('./cloudinary')
const SVGtoPDF = require('svg-to-pdfkit')

exports.pdf = async (req, res) => {
  try {
    const filename = req.body.filename
    const pdfPath = path.join('data', 'pdf', filename + '.pdf')
    const logo = path.join('data', 'img', 'logo.png')

    const content = await req.body.content

    if (!Array.isArray(content) || !content.length)
      throw new Error('Request should be an array')

    // Create a document
    const pdfDoc = new PDFDocument()

    // Pipe its output somewhere, like to a file or HTTP response
    pdfDoc.pipe(fs.createWriteStream(pdfPath))
    .on('finish', () => {
        cloud.uploads(pdfPath).then((result) => {
            res
            .status(200)
            .json({
                message: "success",
                uploadResponse: result.url.replace('.pdf', '.jpg')
            })
            .send()
          })

      });

    pdfDoc.fontSize(13)
    pdfDoc
      .image(logo, {
        fit: [120, 200],
        align: 'center',
        valign: 'top'
      })
      .moveDown(1)

    pdfDoc
      .font('Times-Roman')
      .text('Comienza la búsqueda!')
      .moveDown(0.5)
      .text(
        'Lo primero que deberás hacer como organizador de la partida, será esconder los QRs.'
      )
      .moveDown(2)

    if (content[0]) {
      pdfDoc.text(`1.) Prueba: ${content[0].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[0].qrCode, 73, 240)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[1]) {
      pdfDoc.text(`2.) Prueba: ${content[1].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[1].qrCode, 73, 420)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[2]) {
      pdfDoc.text(`3.) Prueba: ${content[2].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[2].qrCode, 73, 610)
    }

    if (content[3]) {
      pdfDoc.text(`4.) Prueba: ${content[3].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[3].qrCode, 73, 100)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[4]) {
      pdfDoc.text(`5.) Prueba: ${content[4].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[4].qrCode, 73, 290)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[5]) {
      pdfDoc.text(`6.) Prueba: ${content[5].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[5].qrCode, 73, 470)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[6]) {
      pdfDoc.text(`7.) Prueba: ${content[6].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[6].qrCode, 73, 670)
    }

    if (content[7]) {
      pdfDoc.text(`8.) Prueba: ${content[7].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[7].qrCode, 73, 100)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[8]) {
      pdfDoc.text(`9.) Prueba: ${content[8].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[8].qrCode, 73, 300)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    if (content[9]) {
      pdfDoc.text(`10.) Prueba: ${content[9].title}`).moveDown(9)
      SVGtoPDF(pdfDoc, content[9].qrCode, 73, 480)
      pdfDoc
        .text(
          '.............................................................................'
        )
        .moveDown(2)
    }

    pdfDoc.end()
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
