import React from 'react'
import './GameOver.css';

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Acabou o jogo</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver