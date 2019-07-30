import React from "react";

import "./mainPage.scss";
import Input from "../components/Input";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  
  render() {
    return (
      <div className = "fields-container">
        <Input label = {"source word/text"} textAreaName = {"source"} placeholder = {"Original word/text"} />
        <Input label = {"translate word/text"} textAreaName = {"translate"} placeholder = {"Translate word/text"} />
      </div>
    );
  }
}

export default MainPage;
