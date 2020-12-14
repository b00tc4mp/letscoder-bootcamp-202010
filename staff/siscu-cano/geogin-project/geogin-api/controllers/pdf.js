const fs = require('fs');
const path = require('path')
const PDFDocument = require('pdfkit');
const cloud = require('./cloudinary')
const SVGtoPDF = require('svg-to-pdfkit')

exports.pdf = async (req, res) => {
try {
    const filename = req.body.filename;
    const pdfPath = path.join('data', 'pdf', filename + '.pdf')
    const logo = path.join('data', 'img', 'logo.png')
    // Create a document
    const pdfDoc = new PDFDocument()
    const content = await req.body.content
    const svg = `<svg shape-rendering="crispEdges" height="128" width="128" viewBox="0 0 25 25"><path fill="#FFFFFF" d="M0,0 h25v25H0z"></path><path fill="#000000" d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM13 0h1v1H13zM16 0h1v1H16zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM11 1h2v1H11zM14 1h1v1H14zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM13 2h3v1H13zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM12 3h4v1H12zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1H10zM12 4h1v1H12zM15 4h2v1H15zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM12 5h3v1H12zM16 5h1v1H16zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM11 7h2v1H11zM14 7h3v1H14zM0 8h4v1H0zM6 8h1v1H6zM8 8h3v1H8zM14 8h4v1H14zM20 8h3v1H20zM24,8 h1v1H24zM0 9h3v1H0zM5 9h1v1H5zM7 9h2v1H7zM11 9h1v1H11zM13 9h1v1H13zM19 9h1v1H19zM23 9h1v1H23zM0 10h2v1H0zM4 10h3v1H4zM9 10h3v1H9zM14 10h1v1H14zM16 10h2v1H16zM19 10h2v1H19zM1 11h2v1H1zM4 11h1v1H4zM8 11h1v1H8zM11 11h1v1H11zM13 11h1v1H13zM15 11h5v1H15zM21 11h2v1H21zM0 12h2v1H0zM3 12h4v1H3zM8 12h2v1H8zM13 12h2v1H13zM17 12h2v1H17zM20 12h1v1H20zM22,12 h3v1H22zM3 13h2v1H3zM7 13h1v1H7zM9 13h1v1H9zM12 13h1v1H12zM15 13h6v1H15zM24,13 h1v1H24zM1 14h1v1H1zM5 14h2v1H5zM10 14h1v1H10zM12 14h3v1H12zM17 14h1v1H17zM19 14h2v1H19zM22 14h2v1H22zM0 15h1v1H0zM3 15h1v1H3zM5 15h1v1H5zM8 15h4v1H8zM14 15h1v1H14zM16 15h4v1H16zM21 15h1v1H21zM24,15 h1v1H24zM2 16h2v1H2zM5 16h2v1H5zM8 16h3v1H8zM13 16h1v1H13zM15,16 h10v1H15zM8 17h2v1H8zM11 17h1v1H11zM13 17h1v1H13zM16 17h1v1H16zM20 17h1v1H20zM24,17 h1v1H24zM0 18h7v1H0zM9 18h1v1H9zM13 18h1v1H13zM16 18h1v1H16zM18 18h1v1H18zM20,18 h5v1H20zM0 19h1v1H0zM6 19h1v1H6zM9 19h2v1H9zM12 19h1v1H12zM14 19h3v1H14zM20 19h1v1H20zM23 19h1v1H23zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h2v1H10zM16 20h5v1H16zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h2v1H8zM11 21h1v1H11zM13 21h1v1H13zM16 21h3v1H16zM20 21h1v1H20zM22 21h1v1H22zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM8 22h6v1H8zM15 22h9v1H15zM0 23h1v1H0zM6 23h1v1H6zM8 23h3v1H8zM13 23h1v1H13zM20 23h1v1H20zM22 23h1v1H22zM0 24h7v1H0zM8 24h1v1H8zM11 24h4v1H11zM19,24 h6v1H19z"></path></svg><`

    if (!Array.isArray(content) || !content.length) throw new Error('Request should be an array')

    res.setHeader('Content-Disposition', 'attachment; filename="' + filename + '" ')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/pdf')
    res.status(201)
    
    // Pipe its output somewhere, like to a file or HTTP response
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    await pdfDoc.pipe(res)
    
    // pdfDoc.text(content)
   
    pdfDoc.fontSize(13);

    pdfDoc.image(logo, {
      fit: [120, 200],
      align: 'center',
      valign: 'top'
    }).moveDown(1);

    pdfDoc.font('Times-Roman')
   .text('Comienza la búsqueda!')
   .moveDown(.5)
   .text('Lo primero que deberás hacer como organizador de la partida, será esconder los QRs.')
   .moveDown(2);

    if (content[0]) {
        pdfDoc
        .text(`1.) Prueba: ${content[0].title}`)
        .moveDown(9);
        SVGtoPDF(pdfDoc, content[0].qrCode, 73, 240);
        pdfDoc
        .text('.............................................................................')
        .moveDown(2);
    }

    if (content[1]) {
        pdfDoc
        .text(`2.) Prueba: ${content[1].title}`)
        .moveDown(9);
        SVGtoPDF(pdfDoc, content[1].qrCode, 73, 420);
        pdfDoc
        .text('.............................................................................')
        .moveDown(2);
    }

    if (content[2]) {
    pdfDoc
    .text(`3.) Prueba: ${content[2].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[2].qrCode, 73, 610);
    }

    if (content[3]) {
    pdfDoc
    .text(`4.) Prueba: ${content[3].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[3].qrCode, 73, 100);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }

    if (content[4]) {
    pdfDoc
    .text(`5.) Prueba: ${content[4].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[4].qrCode, 73, 290);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }

    if (content[5]) {
    pdfDoc
    .text(`6.) Prueba: ${content[5].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[5].qrCode, 73, 470);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }

    if (content[6]) {
    pdfDoc
    .text(`7.) Prueba: ${content[6].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[6].qrCode, 73, 670);
    }

    if (content[7]) {
    pdfDoc
    .text(`8.) Prueba: ${content[7].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[7].qrCode, 73, 100);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }

    if (content[8]) {
    pdfDoc
    .text(`9.) Prueba: ${content[8].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[8].qrCode, 73, 300);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }

    if (content[9]) {
    pdfDoc
    .text(`10.) Prueba: ${content[9].title}`)
    .moveDown(9);
    SVGtoPDF(pdfDoc, content[9].qrCode, 73, 480);
    pdfDoc
    .text('.............................................................................')
    .moveDown(2);
    }
      
    cloud.uploads(pdfPath).then((result) => {
      const pdfFile = {
      pdfName: filename,
      pdfUrl: result.url,
      pdfId: result.id
       }
       console.log('pdf results--', pdfFile.pdfUrl)
    })
    pdfDoc.end();
}
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}