import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const MysteryTile = ({ name, image, facts, borderColor, backgroundColor }) => (
  <svg
    id="mystery-tile"
    width="640px"
    height="360px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
  >
    <rect
      width="100%"
      height="100%"
      fill={backgroundColor}
      stroke={borderColor}
      strokeWidth="25"
    />
    <defs>
      <mask id="shape-mask">
        <rect width="30%" height="65%" fill="white" rx="5" x="45" y="45" />
      </mask>
    </defs>
    <rect
      width="30%"
      height="65%"
      fill="white"
      stroke={borderColor}
      strokeWidth="7"
      rx="5"
      x="45"
      y="45"
    />
    <image
      width="30%"
      height="65%"
      x="45"
      y="45"
      preserveAspectRatio="xMidYMid slice"
      xlinkHref={image}
      mask="url(#shape-mask)"
    />
    <text
      width="30%"
      x="90"
      y="315"
      fontSize="24"
      fontWeight="bold"
      fill={borderColor}
    >
      {name}
    </text>
    <g>
      <text
        x="355"
        y="65"
        fontSize="32"
        fontWeight="bold"
        fontStyle="italic"
        fill={borderColor}
      >
        Who Am I?
      </text>
      {facts.map((fact, i) =>
        fact ? (
          <foreignObject
            x="285"
            y={90 + 60 * i}
            width="325"
            height="100"
            key={i}
            fill="black"
            fontSize="20"
            className="fact-text"
          >
            {`${i + 1}. ${fact}`}
          </foreignObject>
        ) : null
      )}
    </g>
  </svg>
)

MysteryTile.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  facts: PropTypes.array,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default MysteryTile
