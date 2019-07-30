import React from "react";

import "./input.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const textAreaName = event.target.name;

    this.setState({ value: value });
    this.validateContent(textAreaName, value);
  };

  validateContent = (textAreaName, value) => {
    const regExpTextLatin = /[^a-zA-Z ]/u;
    const regExpTextLKiril = /[^а-яёА-ЯЁ ]/u;
    const regExpSpace = /^\s/;

    if (textAreaName === "input") {
      if (!regExpTextLatin.test(value) && !regExpSpace.test(value)) {
        console.log(textAreaName, true);
      } else {
        console.log(textAreaName, false);
      }
    } else if (textAreaName === "translate") {
      if (!regExpTextLKiril.test(value) && !regExpSpace.test(value)) {
        console.log(textAreaName, true);
      } else {
        console.log(textAreaName, false);
      }
    }
  };

  render() {
    return (
      <label>
        {this.props.label}
        <textarea
          className = "inputTextArea"
          name={this.props.textAreaName}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Input;
