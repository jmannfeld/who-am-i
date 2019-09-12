import React from 'react'
import './App.css';

const MysteryTile = ({name, facts, borderColor, backgroundColor}) => {
  return (
    <svg id="mystery-tile" width="640px" height="360px" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect width="100%" height="100%" fill={backgroundColor} stroke={borderColor} strokeWidth="25"></rect>
      <rect width="30%" height="65%" fill="white" stroke={borderColor} strokeWidth="3" rx="5" x="45" y="45"></rect>
      <text width="30%" x="90" y="315" fontSize="24" fontWeight="bold" fill={borderColor}>{name}</text>
      <g>
        <text x="355" y="65" fontSize="32" fontWeight="bold" fontStyle="italic" fill={borderColor}>Who Am I?</text>
        {
          facts.map((fact, i) => (
              fact ? 
                <text x="285" y={110 + (40 * i)} key={i} fill="black" fontSize="20">{i + 1}. {fact}</text>
              : null
            )
          )
        }
      </g>
    </svg>
  )
}

export default MysteryTile;
