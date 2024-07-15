import styled from "styled-components";
import image from "/images/assets/dice.png";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Start Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content h1 {
    font-size: 96px;
    font-weight: 600;
    white-space: nowrap;
  }
`;
const Button = styled.button`
  border-radius: 5px;
  min-width: 220px;
  border: none;
  color: white;
  background-color: black;
  padding: 10px 18px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease-in 0.4s;

  &:hover {
    background-color: white;
    border: 1px solid;
    color: black;
    transition: ease-in 0.3s;
  }
`;
