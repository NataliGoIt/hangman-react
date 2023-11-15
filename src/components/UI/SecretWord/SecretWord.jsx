import React from "react";
const SecretWord = ({ quantityTry }) => {
  if (quantityTry === 6) {
    console.log("this error 6");
  } else if (quantityTry === 5) {
    console.log("this 5");
  } else if (quantityTry === 4) {
    console.log("this 4");
  } else if (quantityTry === 3) {
    console.log("this 3");
  } else if (quantityTry === 2) {
    console.log("this 2");
  } else if (quantityTry === 1) {
    console.log("this 1");
  } else if (quantityTry === 0) {
    console.log("this 0");
  } else {
    return;
  }
  return <div>{quantityTry}</div>;
};
export default SecretWord;
