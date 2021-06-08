import React from 'react';
import employee from './employee.json';
const columnHeader =["d","firstName","lastName","email","gender"];
 class EmpComp extends React.Component{
   constructor(){
      super();
       this.state={
           tableData:employee.data,
           switchSort:false,
       }
       this.generateHeader = this.generateHeader.bind(this);
       this.generateTableData = this.generateTableData.bind(this);
       this.compareByDesc  =  this.compareByDesc.bind(this);
   }
   handleSort(key){
       alert(key);
        this.setState({
            switchSort:!this.state.switchSort
        })
       let copyTableData =[...this.state.tableData];
       copyTableData.sort(this.compareByDesc(key));
       this.setState({
        tableData:copyTableData
       })
   }
   compareByDesc(key){
    if(this.state.switchSort){
        return function(a,b){
            if (a[key] < b[key]) return -1; // check for value if the second value is bigger then first return -1
            if (a[key] > b[key]) return 1;  //check for value if the second value is bigger then first return 1
            return 0;
        };
    }else{
        return function(a,b){
            if (a[key] > b[key]) return -1; 
            if (a[key] < b[key]) return 1; 
            return 0;
        };
    }
   }
   generateHeader(){
    let res=[];
     for(var i = 0; i < columnHeader.length; i++){
         res.push(<th key={columnHeader[i]}>
             <a href="#" id={columnHeader[i]} key={columnHeader[i]} 
               onClick={(e)=>this.handleSort(e.target.id)}>{columnHeader[i]}</a>
             </th>)
     }
     return res;
   }
   generateTableData() {
       let res=[];
       let tableData = this.state.tableData;
       for(var i =0; i < tableData.length; i++){
           res.push(
            <tr key={i}>
           <td key={tableData[i].id}>{tableData[i].id}</td>
           <td key={tableData[i].firstName}>{tableData[i].firstName}</td>
           <td key= {tableData[i].lastName}>{tableData[i].lastName}</td>
           <td key={tableData[i].email}>{tableData[i].email}</td>
           <td key={tableData[i].gender}>{tableData[i].gender}</td>
           </tr>
           )
       }
       return res;
   }
   render(){
       return(
           <div>
               <div>
        <table className="table  table-hover">
        <thead>
            <tr>
            {this.generateHeader()}
            </tr>
        </thead>
        <tbody>
            {this.generateTableData()}
        </tbody>
        </table>
             </div>
        </div>
       )
   }
}
export default EmpComp;