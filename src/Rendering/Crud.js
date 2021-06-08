import React, { Component } from 'react'
import Form from '../State/form';
const coloumnHeader =["id","name","email"];

export class Crud extends Component {
    constructor() {
        super()
    
        this.state = {
            edit : false,
            emp :[
                {
                    id: '1',
                    name: 'ganesh',
                    email : 'ganesh@gmail.com'
                },
                {
                    id: '2',
                    name: 'ashish',
                    email : 'ashish@gmail.com'
                },
            ]
             
        }
    }
    

    submitHandle=(event)=>{
        event.preventDefault();

        this.setState({
            emp: [...this.state.emp,{
                name: event.target.name.value,
                id: event.target.id.value,
                email: event.target.email.value

            }]
        });
        event.target.value='';
    }
    renderEditForm(){
        console.log("in render edit ")
        if(this.state.edit)
        {
        console.log("in render state edit")

            return  <form className="form-popup" onSubmit={this.onUpdateHandle}>
            <input type ="text" name ="updatename" className="name" defaultValue={this.state.name}></input>
            <input type ="number" name ="updateid" className="id" defaultValue={this.state.id}></input>
            <input type ="email" name ="updateemail" className="email" defaultValue={this.state.email}></input>
          <button className="update-add-item">Update</button>
           
            </form>
        }
    }
    onUpdateHandle=(event)=>{
        event.preventDefault();
        this.setState({




            emp: this.state.emp.map(emps =>{
                let index = 0;
                if(emps.id === this.state.id){
              this.state.emp[index] = [
                    emps['name']=event.target.updatename.value,
                    emps['id']= event.target.updateid.value,
                    emps['email']= event.target.updateemail.value
                ]
                    return emps;
                }
                index++;
               return emps;
            })
        });
        this.setState({
            edit : false
        });
    }

    onEditHandle(event){
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);

        this.setState({
            
            edit:true,
            id :arguments[0],
            name: arguments[1],
            email: arguments[2],
        })
        this.renderEditForm();
    }

    onDeleteHandle(event){
        let id= arguments[0];
        this.setState({
            emp: this.state.emp.filter(emps =>{
                if(emps.id !== id){
                    return emps;
                }
            })
        });
    }





    render() {
        return (
            <div text-aligh= "center">
                <h1>welcome TO GD Solutions </h1>
                    <div> 
                {this.renderEditForm()}
                <div>

                        <form on onSubmit={this.submitHandle}>
                          <div>
                            
                            <div>
                                <label> Name :</label>
                                <input type ="text" name ="name" className="name"></input>
                            </div>
                            <div>
                                <label> Id :</label>
                                <input type ="number" name ="id" className="id"></input>
                            </div>
                            <div>
                                <label> Email :</label>
                                <input type ="email" name ="email" className="email"></input>
                            </div>
                             <div>
                                  <button className="btn-add-item">Add</button>
                            </div>
                        </div>

                        </form>
                        </div>
                      
                        <div>

                        <h2 aline="center" >
                                <table border="1">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email ID</th>
                                                <th> Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.emp.map(emps =>(
                                                <tr key = {emps.id}>
                                                    <td> {emps.id}</td>
                                                    <td>{emps.name}</td>
                                                    <td>{emps.email} </td>
                                                    <td>
                                                        <button onClick={this.onEditHandle.bind(this, emps.id, emps.name,emps.email)}>Edit</button>
                                                        <button onClick={this.onDeleteHandle.bind(this,emps.id)}>Delete</button>
                                                    
                                                    </td>                                                           
                                                </tr>

                                            ))}
                                        </tbody>
                                </table>
                         </h2>
                         </div>

                    </div>
            </div>
        )
    }
}

export default Crud
