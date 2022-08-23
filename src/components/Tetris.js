import React, { useState } from "react";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

//  Components
import Stage from "./Stage";
import Display from "./Display";
import StarsButton from "./StarsButton";

//  Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} test="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StarsButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
