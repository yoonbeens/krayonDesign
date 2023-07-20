import React from "react";
import Info from "./Info";
import User from "./User";
import Play from "./Play";
import "../resource/MainForm.scss";

const MainForm = () => {
  return (
    <div className="wrapper">
      <User></User>
      <Play></Play>
      <Info></Info>
    </div>
  );
};

export default MainForm;
