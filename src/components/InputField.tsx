import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter your todo"
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
