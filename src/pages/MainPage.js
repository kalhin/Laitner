import React from "react";

import "./mainPage.scss";
import Input from "../components/Input";
import InfoIcon from "../components/InfoIcon"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  
  render() {
    return (
      <div className = "fields-container">
        <InfoIcon></InfoIcon>
        <Input 
          label = {"source word/text"} 
          textAreaName = {"source"} 
          placeholder = {"Original word/text"} />
        <Input 
          label = {"translate word/text"} 
          textAreaName = {"translate"} 
          placeholder = {"Translate word/text"} />
      </div>
    );
  }
}

export default MainPage;
