import './boardstyle.css';
import React, { Component } from 'react';
import Header from "./header.js"
import Menu from "./menu.js";

class Board extends Component{
  render(){
    return(
      <div className="return">
        <Header/>
        <Menu/>
      </div>
    );
  }

}
export default Board;