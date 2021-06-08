import React, { Component } from 'react'




const TableHeader=()=>{
    return(
        <thead style={{width:"100%"}}>
                        <tr>
                            <th>Name</th>
                            <th>Email id</th>   
                            <th>User Id</th>
                            <th >Action</th>     
                        </tr>
        </thead>
    )
}




const  TableBody=(props)=>{
    let act=''
    const rows=props.usersData.map((row,index)=>{
        return(
           <tr key={index}>
               <td>{row.name}</td>
               <td>{row.emailid}</td>
               <td>{row.userid}</td>
               <td><button className="btn btn-dark" onClick={()=>props.removeuser(index,act=0)}>Remove</button></td>

           </tr>
        )
        })
        return <tbody>{rows}</tbody>;
    }

export class Tables extends Component {
    render() {
        const {usersData,removeuser}=this.props;
        return (
            <div>
                <table className="table">
            <TableHeader />
    
            <TableBody usersData={usersData} removeuser={removeuser}/>  
                 </table>
                
            </div>
        )
    }
}

export default Tables
