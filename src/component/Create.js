import React from "react";
import "../resource/Create.scss";
import Preview from "./Preview.js";
import Do from "./Do";
import ETC from "./ETC";

const Create = () => {
  return (
    <div className="create-wrapper">
      <Preview />
      <Do />
      <ETC />
    </div>
  );
};

export default Create;
