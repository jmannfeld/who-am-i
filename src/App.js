import React, { useState } from 'react'
import './App.css'
import MysteryTile from './MysteryTile'
import mysteryPerson from './images/mystery.png'

const { saveSvgAsPng } = require('save-svg-as-png')

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FAD0EA')
  const [borderColor, setBorderColor] = useState('#FF43E3')
  const [name, setName] = useState('Mr/Ms X')
  const [image, setImage] = useState(mysteryPerson)
  const [factOne, setFactOne] = useState(null)
  const [factTwo, setFactTwo] = useState(null)
  const [factThree, setFactThree] = useState(null)
  const [factFour, setFactFour] = useState(null)
  const [factFive, setFactFive] = useState(null)
  const facts = [factOne, factTwo, factThree, factFour, factFive]

  function downloadSvg() {
    const slide = document.getElementById('mystery-tile')
    saveSvgAsPng(slide, 'mystery.png')
  }

  function transformImage(target) {
    const file = URL.createObjectURL(target.files[0])
    setImage(file)
  }

  function addButtonHighlight(button) {
    button.style.backgroundColor = borderColor
  }

  function removeButtonHighlight(button) {
    button.style.backgroundColor = '#ffffff'
  }

  return (
    <div className="App">
      <MysteryTile
        name={name}
        image={image}
        facts={facts}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
      />
      <div id="input-list">
        <button
          onClick={downloadSvg}
          onMouseEnter={e => addButtonHighlight(e.target)}
          onMouseLeave={e => removeButtonHighlight(e.target)}
          type="button"
        >
          Download PNG
        </button>
        <div className="field split colors">
          <div className="field">
            <label htmlFor="background-color">
              Background Color:
              <input
                onChange={e => setBackgroundColor(e.target.value)}
                value={backgroundColor}
                type="color"
                name="background-color"
                id="background-color"
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="border-color">
              Highlight Color:
              <input
                onChange={e => setBorderColor(e.target.value)}
                value={borderColor}
                type="color"
                name="border-color"
                id="border-color"
              />
            </label>
          </div>
        </div>
        <div className="field split person-details">
          <div className="name">
            <label htmlFor="name">
              Name:
              <input
                onChange={e =>
                  e.target.value !== ''
                    ? setName(e.target.value)
                    : setName('Mr/Mrs X')
                }
                type="text"
                name="name"
                id="name"
              />
            </label>
          </div>
          <div className="image">
            <label htmlFor="image-upload" className="custom-file-upload">
              Upload Image
              <input
                onChange={e => transformImage(e.target)}
                type="file"
                name="image-upload"
                id="image-upload"
              />
            </label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="fact-1">
            Fact 1:
            <input
              onChange={e => setFactOne(e.target.value)}
              type="text"
              name="fact-1"
              id="fact-1"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="fact-2">
            Fact 2:
            <input
              onChange={e => setFactTwo(e.target.value)}
              type="text"
              name="fact-2"
              id="fact-2"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="fact-3">
            Fact 3:
            <input
              onChange={e => setFactThree(e.target.value)}
              type="text"
              name="fact-3"
              id="fact-3"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="fact-4">
            Fact 4:
            <input
              onChange={e => setFactFour(e.target.value)}
              type="text"
              name="fact-4"
              id="fact-4"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="fact-5">
            Fact 5:
            <input
              onChange={e => setFactFive(e.target.value)}
              type="text"
              name="fact-5"
              id="fact-5"
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
