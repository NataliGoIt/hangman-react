import React, { useState } from "react";
import Letters from "./components/UI/Letters/LettersList";
import Hint from "./components/UI/Words/Hint";
import SecretWord from "./components/UI/SecretWord/SecretWord";

const wordList = [
  { title: "color", word: "синій" },
  { title: "color", word: "червоний" },
  { title: "color", word: "зелений" },
];

function App() {
  const [word, setWord] = useState(
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const [answerArray, setAnswerArray] = useState(
    Array(word.word.length).fill("_ ")
  );
  const [quantityTry, setQuantityTry] = useState(6);

  const handleSelectedLetter = (e) => {
    const guess = e.target.innerText;
    const newAnswerArray = [...answerArray];
    let hasError = false;
    for (let j = 0; j < word.word.length; j++) {
      if (word.word[j] === guess) {
        newAnswerArray[j] = guess;
        hasError = true;
      }
    }
    if (!hasError) {
      setQuantityTry(quantityTry - 1);
    }
    setAnswerArray(newAnswerArray);
  };
  console.log(word);
  return (
    <div>
      <Hint word={word} />
      <div>{answerArray}</div>
      <SecretWord quantityTry={quantityTry} />
      <Letters onClick={handleSelectedLetter} />
    </div>
  );
}

export default App;
