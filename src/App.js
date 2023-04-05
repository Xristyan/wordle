import React, { useState, useReducer, useEffect } from "react";
import GridContainer from "./components/GridContainer";
import Header from "./components/header/Header";
import RandomWord from "./components/functions/RandomWord";
const minMaxReducer = (state, action) => {
  if (action.type === "BOX_UPDATE") {
    return {
      Minvalue: state.Minvalue + action.val,
      MaxValue: state.MaxValue + action.val,
    };
  }

  return { Minvalue: 0, MaxValue: 4 };
};
const wordle = RandomWord();
function App() {
  const [allBoxes, setAllBoxes] = useState([
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
    { letter: "", id: Math.random().toString() },
  ]);
  const [position, setPosition] = useState(0);
  const [minAndMax, dispachMinAndMax] = useReducer(minMaxReducer, {
    Minvalue: 0,
    MaxValue: 4,
  });

  const [currWord, setCurrWord] = useState("");
  const [boolArray, setBoolArray] = useState([]);
  const [winner, setWinner] = useState(false);
  const [prevWord, setPrevWord] = useState("*****");
  //////////////////////////////////////////////
  useEffect(() => {
    console.log(prevWord, currWord);
    const myTimer = setTimeout(() => {
      let winnerState = false;

      const newArrayOfBoolians = [null, null, null, null, null];

      if (currWord === wordle && prevWord !== currWord) {
        winnerState = true;
        setWinner(() => {
          return true;
        });
        setBoolArray((prevBoolArray) => {
          return [
            ...prevBoolArray.slice(0, minAndMax.Minvalue - 5),
            ...[true, true, true, true, true],
          ];
        });
      }
      if (prevWord === currWord) {
        const checkedArray = updatedArrayOfBoolians(newArrayOfBoolians);

        setBoolArray((prevBoolArray) => {
          return [
            ...prevBoolArray.slice(0, minAndMax.Minvalue - 5),
            ...checkedArray,
          ];
        });
      }

      if (currWord !== wordle && prevWord !== currWord) {
        if (currWord === "") return;
        const checkedArray = updatedArrayOfBoolians(newArrayOfBoolians);

        setBoolArray((prevBoolArray) => {
          return [
            ...prevBoolArray.slice(0, minAndMax.Minvalue - 5),
            ...checkedArray,
          ];
        });
      }
      if (position === 30 && winnerState === false) {
        alert(`The word is ${wordle}`);
      }
    }, 100);
    return () => {
      clearTimeout(myTimer);
    };
  }, [currWord, prevWord]);
  ///////////////////////////////////////
  // Handling info coming from buttons
  const updateBoxesAndPositionHandler = (letter) => {
    if (letter.length === 1) {
      if (position === minAndMax.MaxValue + 1) return;

      setAllBoxes((prevBoxes) => {
        return prevBoxes.map((el, i) => {
          if (i == position) {
            el.letter = letter;
          }
          return el;
        });
      });
      increasePosition();
    }
    if (letter === "DELETE") {
      if (position === minAndMax.Minvalue) return;
      setAllBoxes((prevBoxes) => {
        return prevBoxes.map((el, i) => {
          if (i == position - 1) {
            el.letter = "";
          }
          return el;
        });
      });
      decreasePosition(1);
    }
    if (letter === "ENTER") {
      if (position !== minAndMax.MaxValue + 1) return;
      // if (position === 30) return;

      dispachMinAndMax({ type: "BOX_UPDATE", val: 5 });
      updateCurrentWordHandler();
    }
  };
  ///////////////////////////////////// Seting CurrentWord
  const updatedArrayOfBoolians = (newArrayOfBoolians) => {
    const checkedArray = newArrayOfBoolians.map((el, i) => {
      if (currWord[i] === wordle[i]) {
        return true;
      }
      if (currWord[i] !== wordle[i] && wordle.includes(currWord[i])) {
        return false;
      }
      if (currWord[i] !== wordle[i]) {
        return null;
      }
    });
    return checkedArray;
  };
  const updateCurrentWordHandler = () => {
    setPrevWord(() => {
      return currWord;
    });
    const currentWord = allBoxes
      .filter((el, i) => {
        if (i >= minAndMax.Minvalue && i <= minAndMax.MaxValue) {
          return el;
        }
      })
      .map((el) => {
        return el.letter;
      });
    setCurrWord(currentWord.join(""));
  };

  // Decreasing Position
  const decreasePosition = (num) => {
    if (position === minAndMax.Minvalue) return;
    setPosition((prevPositon) => {
      return prevPositon - num;
    });
  };

  // Increasing position
  const increasePosition = () => {
    if (position === minAndMax.MaxValue + 1) return;
    setPosition((prevPositon) => {
      return prevPositon + 1;
    });
  };

  return (
    <div>
      <Header />
      <GridContainer
        updateBoxesAndPositionHandler={updateBoxesAndPositionHandler}
        allBoxes={allBoxes}
        pos={position}
        currWord={currWord}
        wordle={wordle}
        boolArray={boolArray}
        winner={winner}
      />
    </div>
  );
}

export default App;
