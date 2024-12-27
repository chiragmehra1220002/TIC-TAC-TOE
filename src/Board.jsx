import React from "react";

const Board = ({ children, ...props }) => {
  return (
    <div className="board" {...props}>
      {children} {/* This will render all the square components passed as children */}
    </div>
  );
};

export default Board;
