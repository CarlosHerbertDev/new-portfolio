import { ReactElement } from "react";
import "./plano.css";

const NUM_SHOOTING_STARS = 8;

export const Plano = (): ReactElement => {
  return (
    <div className="background-container">
      <div className="stars"></div>
      {Array.from({ length: NUM_SHOOTING_STARS }).map((_, index) => (
        <div
          key={index}
          className="shooting-star"
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
