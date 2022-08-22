import React from "react";

import Stage from "./Stage";
import Display from "./Display";
import StarsButton from "./StarsButton";

const Tetris = () => {
  return (
    <div>
      <Stage />
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
