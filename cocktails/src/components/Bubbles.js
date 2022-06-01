import styled from "styled-components";

function Bubbles() {
  return (
    <>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
      <StyledBubbles>
        <StyledDot></StyledDot>
      </StyledBubbles>
    </>
  );
}

const StyledBubbles = styled.div`
  height: 4rem;
  width: 4rem;
  border: 0.1rem solid rgba(108, 176, 178, 0.7);
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 55%;
  animation: animate 4s linear infinite;
  pointer-events: none;
  &:nth-child(1) {
    top: 35%;
    left: 60%;
    animation: animate 8s linear infinite;
  }
  &:nth-child(2) {
    top: 20%;
    left: 50%;
    animation: animate 10s linear infinite;
  }
  &:nth-child(3) {
    top: 10%;
    left: 80%;
    animation: animate 6s linear infinite;
  }

  &:nth-child(4) {
    top: 10%;
    left: 70%;
    animation: animate 15s linear infinite;
  }
  &:nth-child(5) {
    top: 15%;
    left: 65%;
    animation: animate 15s linear infinite;
  }
  &:nth-child(6) {
    top: 45%;
    left: 75%;
    animation: animate 7s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate(70deg);
    }
    100% {
      transform: scale(1.3) translateY(-100px) rotate(360deg);
    }
  }
`;

const StyledDot = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: rgba(108, 176, 178, 0.7);
  position: absolute;
  top: 20%;
  right: 20%;
`;

export default Bubbles;
