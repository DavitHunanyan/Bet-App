import React,{Component} from 'react';

class TableHeader extends Component{
		 render(){

		 const obj=this.props.headerdata;
		 let headers =[];
			  for(let i in obj){
			  		headers.push(i);
			  }
		  //console.log("TableHeader Data :",headers);
		  let header = headers.map((headers,index)=>
		  	<th key={index}>{headers}</th>

		  );
		 	return(
		 	<tr className="TableHeader">
		 		{header}
		 		<th colSpan="2">Actions</th>
		 	</tr>
		 	);
		 }
	}
    export default TableHeader;