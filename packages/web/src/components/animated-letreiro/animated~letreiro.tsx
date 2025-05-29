import React from "react";
import { AnimatedTextProps } from "@interfaces/types";

const AnimatedLetreiro: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  return (
    <p className={className}>
      {text.split("").map((char, index) => (
        <span key={index} className="animated-letter">
          {char}
        </span>
      ))}
    </p>
  );
};

export default AnimatedLetreiro;
