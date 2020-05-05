// import React from 'react'
import pdfMake from 'pdfmake'

async function PDFmakeComponent(noOfImage) {
  var docDefinition = {
    pageSize: 'A4',
    pageMargins: [0, 0, 0, 0],
    content: []
  }

  const content = []

  for (let j = 0; j < noOfImage; j = j + 5) {
    console.log(j)

    const columns = []
    const base = await imageToBase64('https://source.unsplash.com/random/')

    console.log(base)

    columns.push({
      width: 'auto',
      image: base.base64,
      fit: [105, 105]
    })

    content.push({ columns: columns })
  }

  docDefinition.content = content
  pdfMake.createPdf(docDefinition).download()
}

async function imageToBase64(url) {
  let image
  image = new Image()
  image.crossOrigin = 'Anonymous'
  // image.height = 90
  image.src = url

  const imgPro = await a(image)

  // image.addEventListener('load', function () {
  //   let canvas = document.createElement('canvas')
  //   let context = canvas.getContext('2d')
  //   canvas.width = image.width
  //   canvas.height = image.height
  //   context.drawImage(image, 0, 0)
  //   try {
  //     return canvas.toDataURL('image/png'))
  //   } catch (err) {
  //     console.error(err)
  //   }
  // })

  return new Promise(resolve => {
    resolve(imgPro)
  })
}

const a = image =>
  new Promise(resolve => {
    image.onload = () => {
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')

      // const height = 90
      // const x = image.height / height
      // const width = image.width / x

      canvas.width = image.width
      canvas.height = image.height
      context.drawImage(image, 0, 0)

      resolve({ base64: canvas.toDataURL('image/png'), width: image.width })
    }
  })

//   var docwidth = doc.internal.pageSize.getWidth()
//   var docheight = doc.internal.pageSize.getHeight()

//   const height = 90

//   let previosWidth = 0
//   let row = 0
//   for (let j = 0; j < noOfImage; j++) {
//     const Image = await imgData('https://source.unsplash.com/random/')
//     const x = Image.height / height
//     const width = Image.width / x

//     console.log(j)

//     let nextWidth = previosWidth + width

//     if (nextWidth > docwidth) {
//       row = row + 1
//       previosWidth = 0
//       nextWidth = 0
//     }

//     if (height * row > docheight) {
//       console.log('here')
//       doc.addPage()
//       row = 0
//     }
//     doc.addImage(
//       Image.img,
//       'png',
//       previosWidth,
//       height * row,
//       width,
//       height,
//       undefined,
//       'FAST'
//     )

//     previosWidth = width + previosWidth
//   }

//   doc.save('save.pdf')
// }

// async function imgData(imgData) {
//   var img = new Image()

//   img.style.objectFit = 'cover'
//   img.src = imgData
//   const imgPro = await a(img)

//   return new Promise(resolve => {
//     resolve({ img, width: imgPro[0], height: imgPro[1] })
//   })
// }

// const a = img =>
//   new Promise(resolve => {
//     img.onload = () => {
//       resolve([img.width, img.height])
//     }
//   })

export default PDFmakeComponent
