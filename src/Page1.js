import './Boardstyle.css';
import './Table.css';
import React, { Component } from 'react';
import Table from './TableComponent/Table.js'
import array from './array.js';
import Header from "./Header.js"
import Menu from "./Menu.js";

class Page1 extends Component{
  render(){
    return(
      <div className="return">
        <Header/>
        <Menu/>
        <div className="Table">
            <Table data={array} />
          </div>
      </div>
    );
  }

}
export default Page1;