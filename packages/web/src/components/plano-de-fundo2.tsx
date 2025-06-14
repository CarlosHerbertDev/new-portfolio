import { ReactElement } from "react";
import "./plano.css";

const NUM_SHOOTING_STARS = 8;

export const Plano = (): ReactElement => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      <div className="w-[1px] h-[1px] absolute bg-white stars"></div>
      {Array.from({ length: NUM_SHOOTING_STARS }).map((_, index) => (
        <div
          key={index}
          className="absolute w-[120px] h-[2px] z-[-1] opacity-0 rotate-[25] bg-gradient-to-r from-white to-transparent shooting-star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `-${Math.random() * 200}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
