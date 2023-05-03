import React from 'react'
import GameItems from './GameItems'

function Gamelist({ data }) {
  return (
    <div className="games-container">
      {data.map(images => <GameItems key={images.id}{...images} />)}
    </div>
  )
}

export default Gamelist
