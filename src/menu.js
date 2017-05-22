import './Menu.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{
  render(){
    return(
      
          <div className="Menu">
                  <ul className="list_menu">
                      <li className="menu_item"><Link to='/login'>Login Page</Link></li>
                      <li className="menu_item"><Link to='/page1'>User Info List </Link></li>
                      <li className="menu_item"><Link to='/page2'>Mail List Add</Link></li>
                      <li className="menu_item"><a href="">Contact</a></li>
                 </ul>
          </div>
      
    );
  }
}

export default Menu;
