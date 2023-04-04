import "./App.css";
import "./index.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsList } from "./data/words";

// Components
import StartScreen from "./Components/StartScreen";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }

//Starts the secret word game
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    
    //Create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())
    
    console.log(wordLetters)
    console.log(word, category)

    setGameStage(stages[1].name)
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
  }

// Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }
// restarts the game 
  const retry = () => {
    setGameStage(stages[0].name); 
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen  startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
