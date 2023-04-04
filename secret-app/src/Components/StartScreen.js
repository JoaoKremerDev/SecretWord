import "./StartScreen.css"

const StartScreen = ({stages, setGameStage}) => {
  const startToGame = () => {
      setGameStage(stages[1].name)
  }
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startToGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen