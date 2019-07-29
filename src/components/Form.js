import React from "react";

const Form = ({ placeholder }) => {
  return (
    <form>
      <label>Enter your text
        <input type="text" placeholder={placeholder} />
      </label>
    </form>
  );
};

export default Form;
