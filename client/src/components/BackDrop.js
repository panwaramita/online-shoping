import React from "react";
import "./backDrop.css";
export const BackDrop = ({ show, click }) => {
  return (
    show && (
      <div className='backdrop' onClick={click}>
        BackDrop
      </div>
    )
  );
};
