// import React from 'react'
import jsPDF from 'jspdf'

async function JsPDFComponent(noOfImage) {
  var doc = new jsPDF('p', 'px', 'a4', true, 16)

  var docwidth = doc.internal.pageSize.getWidth()
  var docheight = doc.internal.pageSize.getHeight()

  const height = 90

  let previosWidth = 0
  let row = 0
  for (let j = 0; j < noOfImage; j++) {
    const Image = await imgData('https://source.unsplash.com/random/')
    const x = Image.height / height
    const width = Image.width / x

    console.log(j)

    let nextWidth = previosWidth + width

    if (nextWidth > docwidth) {
      row = row + 1
      previosWidth = 0
      nextWidth = 0
    }

    if (height * row > docheight) {
      console.log('here')
      doc.addPage()
      row = 0
    }
    doc.addImage(
      Image.img,
      'png',
      previosWidth,
      height * row,
      width,
      height,
      undefined,
      'FAST'
    )

    previosWidth = width + previosWidth
  }

  doc.save('save.pdf')
}

async function imgData(imgData) {
  var img = new Image()

  img.style.objectFit = 'cover'
  img.src = imgData
  const imgPro = await a(img)

  return new Promise(resolve => {
    resolve({ img, width: imgPro[0], height: imgPro[1] })
  })
}

const a = img =>
  new Promise(resolve => {
    img.onload = () => {
      resolve([img.width, img.height])
    }
  })

export default JsPDFComponent
