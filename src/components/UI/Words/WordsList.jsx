import React from "react";
function WordList() {
  const wordList = [
    {
      title: "color",
      word: "blue",
    },
    {
      title: "color",
      word: "while",
    },
    {
      title: "color",
      word: "green",
    },
  ];
  const word = wordList[Math.floor(Math.random() * wordList.length)];
  return (
    <div>
      <p>{word.title}</p>
      <p>{word.word}</p>
    </div>
  );
}

export default WordList;
