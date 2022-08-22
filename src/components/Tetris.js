import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StarsButton from "./StarsButton";

import { createStage } from "../gameHelpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StarsButton />
      </aside>
    </div>
  );
};

export default Tetris;
