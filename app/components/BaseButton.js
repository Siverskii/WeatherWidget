import React from "react";
import style from "./BaseButton.scss";

const BaseButton = (props) => {
  return (
    <div className={"ButtonContainer"}>
      <div className={"Button"} onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
};

export { BaseButton };
