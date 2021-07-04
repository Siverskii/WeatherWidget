import React, { useState } from "react";
import style from "./Input.scss";

export const Input = (props) => {
  return (
    <div className="inputContainer">
      <input
        className="baseInput"
        name={props.type}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        autoComplete="off"
        placeholder={props.placeholder}
      />
    </div>
  );
};

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value.trim());
  }
  function resetValue(e) {
    setValue("");
  }

  return [value, handleChange, resetValue];
}

export { useInput };
