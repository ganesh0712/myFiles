import React from 'react'
const columnHeader =["id","taskName","taskComp","date"];
class MyToDo extends React.Component
{
  
    constructor()
    {
        super()
        this.state={
            edit:false,
            switchSort:false,
            todo:[
            {
                id:"1",
                taskName:"Study react",
                taskComp:false,
                date:new Date()
            },
            {
                id:"2",
                taskName:"Work on project react",
                taskComp:false,
                date:new Date()
            },
            {
                id:"3",
                taskName:"Create restApi in Spring Boot",
                taskComp:false,
                date:new Date()
            },
            {
                id:"4",
                taskName:"Invoke API in  react",
                taskComp:false,
                date:new Date()
            },
            {
                id:"5",
                taskName:"Build UI in React",
                taskComp:false,
                date:new Date()
            }
        
        
        ]
        }
        this.generateHeader = this.generateHeader.bind(this);
        this.generateTableData=this.generateTableData.bind(this);
        this.compareByDesc  =  this.compareByDesc.bind(this);
    }
    onSubmitHandle=(event)=>{
        event.preventDefault();

        this.setState({
            todo: [...this.state.todo, {
              id: Date.now(),
              taskName: event.target.item.value,
              taskComp: false,
              date:new Date()
             
            }]
          });
      
          event.target.item.value = '';
    }
    onEditHandle(event) {
     
        this.setState({
          edit: true,
          id: arguments[0],
          taskName: arguments[1]
        });
    }
    onUpdateHandle=(event)=>{
        
        event.preventDefault();

       this.setState({
        todo: this.state.todo.map(item => {
         if (item.id === this.state.id) {
           item['taskName'] = event.target.updatedTask.value;
           return item;
         }

         return item;
       })
     });

    this.setState({
      edit: false
    });
     
    }
    renderEditForm() {
       if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle}>
        <input type="text" name="updatedTask" className="item" defaultValue={this.state.taskName} />
        <button className="update-add-item">Update</button>
      </form>
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
    let tableData = this.state.todo;
    
    for(var i =0; i < tableData.length; i++){
      if(tableData[i].taskComp)
      {
        res.push(
         <tr key={i}>
        <td key={tableData[i].id}>{tableData[i].id}</td>
        <td key={tableData[i].taskName}>{tableData[i].taskName}</td>
        <td key= {tableData[i].taskComp}>{tableData[i].taskComp.toString()}</td>
        <td key={tableData[i].date}>{tableData[i].date.toLocaleString()}</td>
       
        </tr>
        )
        }
    }
    
    return res;
}
handleSort(key){
  alert("in handle sort" ,key);
  this.setState({
      switchSort:!this.state.switchSort
  })
  let copyTableData =[...this.state.todo];

  copyTableData.sort(this.compareByDesc(key));
  this.setState({
   todo:copyTableData
    })
  console.log("in handle sort ",this.state.todo);
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
  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      todo: this.state.todo.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }
  onCompleteHandle(event)
  {
  
    let id = arguments[0];

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          item['taskComp'] = true;
          return item;
        }
        return item;
      })
    });
    console.log(this.state.todo);
  }
    render()
    {
       return(
            <div  text-align="center">
                <h1>Welcome to Todo app...</h1>
                <div>
                {this.renderEditForm()}
                <form onSubmit={this.onSubmitHandle}>
                    <input type="text" name="item" className="item" />
                    <button className="btn-add-item">Add</button>
                </form>
                <h2 aline="center">
                    <table border="1">
                        <thead>
                            <tr>
                                <th> Id</th>
                                <th> Task Name</th>
                                <th> Status</th>
                                <td> Date</td>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todo.map(task=>(
                                  <tr key={task.id}>
                                      <td>{task.id}</td>  
                                      <td>{task.taskName}</td>
                                      <td>{task.taskComp.toString()}</td>
                                      <td>{task.date.toLocaleString()}</td>
                                      <td>
                                          <button  onClick={this.onEditHandle.bind(this, task.id, task.taskName)}>Edit</button> |
                                          <button onClick={this.onDeleteHandle.bind(this, task.id)}>Delete</button>
                                          <button onClick={this.onCompleteHandle.bind(this, task.id)}>Complete</button>
                                      
                                      </td>
                                     
                                  </tr>
                            ))}
                      
                        </tbody>
                    </table>
                </h2>
               </div> 
               <div>
                <h2 aline="center"> Completed Task ...
                
                    <table border="1">
                        <thead>
                            <tr>
                               {this.generateHeader()}
                            </tr>
                        </thead>
                        <tbody>
                        {/* names.filter(name => name.includes('J')) */}
                            {this.generateTableData() }
                      
                        </tbody>
                    </table>
                    </h2>
                  </div>
               
            </div>
        )
    }
}
export default MyToDo;