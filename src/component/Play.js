import React from "react";
import "../resource/Play.scss";

const Play = () => {
  return (
    <div className="play">
      <div className="game"></div>
      <div className="chat">
        <input className="input" type="text" />
        <button className="button"></button>
      </div>
    </div>
  );
};

export default Play;
