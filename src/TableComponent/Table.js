import React, { Component } from 'react';
import TableHeader from'./TableHeader.js';
import TableRow from './TableRow.js';
import AddRowTable from './AddRowTable.js';
import '../Table.css';

import array from '../array.js';

class Table extends Component{
			constructor(props){
				super(props);
				this.state={
				  data:this.props.data
				};
				this.updateTable=this.updateTable.bind(this);
			}
			updateTable(){
		      this.setState({data:array});
		      console.log("update table, and Data",array);
			}
			render(){
		     	return(
		     	<div>
					 <h2 id="THeader">User Info List</h2>
			     	<table>
			     	<TableHeader headerdata={this.props.data[0]} />
			     	<TableRow update={this.updateTable} dataArray={this.state.data}/>
			     	</table>
			     	<AddRowTable  update={this.updateTable} Id={this.state.data.length + 1}/>
			     </div>
		     	);
		     }
     	
	}
    export default Table;