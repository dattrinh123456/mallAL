import logo from "./logo.svg";
import "./App.css";

import Client from "./components/Client";
import Navigation from "./components/Navigation";

import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Controlbar from "./components/Controlbar";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
    };
  }

  getDataFromPor = (data) => {
    this.setState({
      product: data,
    });
  };
  
  render() {
    const { product } = this.state;
    return (
      <div>
        <div>
          <Navigation getDataFromApp={product} />
          <Portfolio
            valueSearch={this.state.valueSearch}
            sendDataToApp={this.getDataFromPor}
          />
          <Team />
          <Client />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
