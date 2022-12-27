import { React, useState } from "react";

import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(() => ({
  margin: 10,
  backgroundColor: "rgb(81, 223, 175)",
  "&:hover": {
    backgroundColor: "rgb(224, 106, 106)",
  },
}));

function Game() {
  const [numInput = "", setNumInput] = useState();
  const [isPlay, setIsPlay] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [countAttempts, setCountAttempts] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);

  // let randomNumber = 0;

  const newGame = () => {
    setIsPlay(true);
    setRandomNumber(Math.floor(Math.random() * 1000));
    setCountAttempts(4);
    setAttempts([]);
    isWin ? setIsWin(false) : setIsLose(false);
  };

  const inputNum = (event) => {
    setNumInput(event.target.value);
  };

  const checkNum = () => {
    console.log(numInput);
    // let tempList = attempts;
    // tempList.push(+numInput);
    // setAttempts(tempList);
    // setAttempts((prevAttempts) => {
    //   return [...prevAttempts, attempts.push(+numInput)];
    // });

    let playerTry = "";
    if (numInput < randomNumber) {
      playerTry = `N > ${numInput}`;
    } else playerTry = `N < ${numInput}`;

    setAttempts([...attempts, playerTry]);
    setNumInput("");
    console.log(countAttempts);

    if (countAttempts > 0) {
      if (Number(numInput) === randomNumber) {
        console.log("win");
        setIsWin(true);
        setIsPlay(false);
      } else {
        setCountAttempts(countAttempts - 1);
      }
    } else {
      console.log("lost");
      setIsLose(true);
      setIsPlay(false);
    }
  };

  return (
    <div className="content">
      <h1>Game</h1>
      <MyButton disabled={isPlay} onClick={newGame}>
        New Game
      </MyButton>
      <Input
        type="number"
        placeholder="number"
        value={numInput}
        onChange={inputNum}
      />
      <MyButton disabled={!isPlay} onClick={checkNum}>
        Check
      </MyButton>
      {/* <h3>{randomNumber}</h3> */}
      <br />
      Information:
      <List>
        {attempts.map((item) => (
          <ListItem key={Math.random()}>{item}</ListItem>
        ))}
      </List>
      Attempts: {countAttempts}
      {isWin && <h1>Good job</h1>}
      {isLose && <h1>Game Over</h1>}
    </div>
  );
}

export default Game;
