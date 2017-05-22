import React, { Component } from 'react';
import Header from "./Header.js"
import Menu from "./Menu.js";
import AddMailingList from"./AddMailingList";
import './Table.css';

class Page2 extends Component{
  render(){
    return(
      <div className="return">
        <Header/>
        <Menu/>
        <div className="Table">
            <AddMailingList/>
          </div>
      </div>
    );
  }

}
export default Page2;