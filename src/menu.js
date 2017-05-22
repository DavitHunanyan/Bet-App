import './boardstyle.css';
import Table from './Table.js'
import array from './array.js';
import React, { Component } from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="content flex">
          <div className="menu flex">
                  <ul className="list_menu">
                      <li className="menu_item"><a href="">Home </a></li>
                      <li className="menu_item"><a href="">News</a></li>
                      <li className="menu_item"><a href="">About</a></li>
                      <li className="menu_item"><a href="">Contact</a></li>
                 </ul>
          </div>
          <div className="table_container flex">
            <Table data={array} />
          </div>
      </div>
    );
  }
}

export default Menu;
