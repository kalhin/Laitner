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
        <Input textAreaName = {"input"} placeholder = {"Original word/text"} />
        <Input textAreaName = {"translate"} placeholder = {"Translate word/text"} />
      </div>
    );
  }
}

export default MainPage;
