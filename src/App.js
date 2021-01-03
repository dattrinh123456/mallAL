import logo from "./logo.svg";
import "./App.css";

import Client from "./components/Client";
import Navigation from "./components/Navigation";

import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Controlbar from "./components/Controlbar";

// function App() {

//  const receivalueSearch =(data)=>{
//  console.log(data)
//   }
//   return (
//     <div >
//       <Navigation/>
//       <Controlbar valueSearch={receivalueSearch}  />
//       <Portfolio/>
//       <Team/>
//       <Client/>
//       <Contact/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";

 class App extends Component {
   constructor (props) {
     super(props)
     this.state = {
       valueSearch :''
     }
   }
 receivalueSearch =(data)=>{
    this.setState(
      {
        valueSearch:data
      }
    )
     }
  render() {
   
    return (
      <div>
        <div>
          <Navigation />
          <Controlbar valueSearch={this.receivalueSearch}  />
          <Portfolio valueSearch={this.state.valueSearch}/>
          <Team />
          <Client />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App