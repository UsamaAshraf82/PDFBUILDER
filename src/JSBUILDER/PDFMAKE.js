import pdfMake from 'pdfmake'

async function PDFmakeComponent(noOfImage) {
  var docDefinition = {
    pageSize: 'A4',
    pageMargins: [0, 0, 0, 0],
    content: []
  }

  const content = []
  let width = 0
  let columns = []

  for (let j = 0; j < noOfImage; j++) {
    console.log(j)

    const base = await imageToBase64('https://source.unsplash.com/random/')

    if (width > 540) {
      console.log(columns)
      content.push({ columns: columns })
      columns = []
      width = 0
    }

    width = width + base.width

    columns.push({
      image: base.base64,
      width: base.width
    })
  }

  console.log(content)
  docDefinition.content = content
  pdfMake.createPdf(docDefinition).download('A', () => {
    console.log('done')
  })
}

async function imageToBase64(url) {
  let image
  image = new Image()
  image.crossOrigin = 'Anonymous'
  image.src = url

  const imgPro = await a(image)

  return new Promise(resolve => {
    resolve(imgPro)
  })
}

const a = image =>
  new Promise(resolve => {
    image.onload = () => {
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')

      const height = 150
      const x = image.height / height
      const width = image.width / x

      canvas.width = image.width
      canvas.height = image.height
      context.drawImage(image, 0, 0)

      resolve({ base64: canvas.toDataURL('image/png'), width: width })
    }
  })

export default PDFmakeComponent
