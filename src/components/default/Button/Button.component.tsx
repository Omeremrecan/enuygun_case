import React from "react";
import { IButtonProps } from "../../../types/IButton";

const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
