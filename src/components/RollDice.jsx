import { useState } from "react";

import styled from "styled-components";

const RollDice = () => {
  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    console.log(roleDice);
  };
  return (
    <DiceContainer>
      <div onClick={RollDice} className="dice">
        <img src={`../images/assets/dice_1.png`} alt="" />
      </div>
      <p>Click on Dice to Role</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
