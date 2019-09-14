import React, { useState } from 'react';
import './App.css';
import MysteryTile from './MysteryTile';
import mysteryPerson from './images/mystery-person.png';

const { saveSvgAsPng } = require('save-svg-as-png');

function App() {
  const [borderColor, setBorderColor] = useState("#FF43E3");
  const [backgroundColor, setBackgroundColor] = useState("#FAD0EA");
  const [name, setName] = useState("Mr/Ms X");
  const [image, setImage] = useState(mysteryPerson);
  const [factOne, setFactOne] = useState(null);
  const [factTwo, setFactTwo] = useState(null);
  const [factThree, setFactThree] = useState(null);
  const [factFour, setFactFour] = useState(null);
  const [factFive, setFactFive] = useState(null);
  const facts = [
    factOne,
    factTwo,
    factThree,
    factFour,
    factFive
  ]

  function downloadSvg() {
    const slide = document.getElementById("mystery-tile");
    saveSvgAsPng(slide, "mystery.png");
  }

  function transformImage(target) {
    URL.createObjectURL(target.files[0])
    setImage(URL.createObjectURL(target.files[0]))
  }

  function addButtonHighlight(button) {
    button.style.backgroundColor = borderColor;
  }

  function removeButtonHighlight(button) {
    button.style.backgroundColor = "#ffffff";
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
          onMouseEnter={(e) => addButtonHighlight(e.target)}
          onMouseLeave={(e) => removeButtonHighlight(e.target)}
        >
          Download PNG
        </button>
        <div className="field split colors">
          <div className="field">
            <label htmlFor="border-color">Highlight Color:</label>
            <input onChange={(e) => setBorderColor(e.target.value)} value={borderColor} type="color" name="border-color" id="border-color"/>
          </div>
          <div className="field">
            <label htmlFor="background-color">Background Color:</label>
            <input onChange={(e) => setBackgroundColor(e.target.value)} value={backgroundColor} type="color" name="background-color" id="background-color"/>
          </div>
        </div>
        <div className="field split person-details">
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name"/>
          </div>
          <div className="image">
            <label htmlFor="image-upload" className="custom-file-upload">Upload Image</label>
            <input onChange={(e) => transformImage(e.target)} type="file" name="image-upload" id="image-upload"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="fact-1">Fact 1:</label>
          <input onChange={(e) => setFactOne(e.target.value)} type="text" name="fact-1" id="fact-1"/>
        </div>
        <div className="field">
          <label htmlFor="fact-2">Fact 2:</label>
          <input onChange={(e) => setFactTwo(e.target.value)} type="text" name="fact-2" id="fact-2"/>
        </div>
        <div className="field">
          <label htmlFor="fact-3">Fact 3:</label>
          <input onChange={(e) => setFactThree(e.target.value)} type="text" name="fact-3" id="fact-3"/>
        </div>
        <div className="field">
          <label htmlFor="fact-4">Fact 4:</label>
          <input onChange={(e) => setFactFour(e.target.value)} type="text" name="fact-4" id="fact-4"/>
        </div>
        <div className="field">
          <label htmlFor="fact-5">Fact 5:</label>
          <input onChange={(e) => setFactFive(e.target.value)} type="text" name="fact-5" id="fact-5"/>
        </div>
      </div>
    </div>
  );
}

export default App;
