import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import JsPDFComponent from './JSBUILDER/JSPDF'
import PDFmakeComponent from './JSBUILDER/PDFMAKE'

function App() {
  const [Images, setImages] = useState(20)
  const JsPDF = async () => {
    JsPDFComponent(Images)
  }
  const PDFMake = async () => {
    PDFmakeComponent(Images)
  }

  return (
    <div className='App'>
      <div>
        <label>No of Images</label>
        <input
          value={Images}
          type='number'
          onChange={e => {
            setImages(e.target.value)
          }}
        />
        <button onClick={JsPDF}> Click me To Start PDF BUILD "JSPDF"</button>
      </div>
      <div>
        <label>No of Images</label>
        <input
          value={Images}
          type='number'
          onChange={e => {
            setImages(e.target.value)
          }}
        />
        <button onClick={PDFMake}>Click me To Start PDF BUILD "PDFMake"</button>
      </div>
    </div>
  )
}

export default App

