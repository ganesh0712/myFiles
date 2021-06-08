import React, { Component } from 'react'

 class JasonArrayForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: [],
                name: '',
                userid: '',
                emailid: '',

            
        }
        this.handleData=this.handleData.bind(this)

    }

    handleData =(event)=>{
        this.setState({[event.target.name] : event.target.value})
        //console.log(this.state.name)
    }





    submitData=(e)=>{
    let { user, input } = this.state;
 //  console.log(this.state)

    user.push(this.state)
   // console.log(this.state.user)
    this.setState({ user: user })
    e.preventDefault();      
    }


    // submitData=(e)=>{
    //     e.preventDefault();

    //     const {user}=this.state,
    //     name=this.refs.name.value,
    //     email = this.refs.email.value,
    //     userid = this.refs.userid.value;
    //      this.setState( {
    //         user : [...user,{name: '', userid: '', emailid:'' }]
    //     }    ,() => {
    //         this.refs.name.value = '';
    //         this.refs.email.value = '';
    //         this.refs.userid.value = '';
    //       }
    //       );
           
    //       console.log(this.state.user)
    //       e.preventDefault();
    // }
    handleDelete=(props)=>{
        
        let input= this.user.splice(props.index,1)

    }


    render() {
        return (
            <div>          
                 <form onSubmit={this.submitData}>
                <div>
                <label>
                    Name :
                    <input type="text" name="name" onChange={this.handleData} />
                </label>

                </div>
                <div>
                <label>
                    Email ID: 
                    <input type="text" name="emailid" onChange={this.handleData} />
                </label>
                </div>
                <div>
                <label>
                    User ID : 
                    <input type="text" name="userid" onChange={this.handleData} />
                </label>
                </div>
                <div>
                    <button type={'submit'}>submit</button>
                </div>
            </form>
{/*           
            <ol>
                {this.state.user.map((list)=>{
                     return <li key={list.userid}> name: {list.name} email id : {list.emailid} User id : {list.userid} </li>
                   

                })}
             </ol> */}
            <div>

             <table className="table"> 
                 <thead>
                     <tr>
                         <th>
                             Name
                         </th>
                         <th>
                             User ID
                         </th>
                         <th>
                             Email Id
                         </th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 {this.state.user.map((list,index)=>{
                return <tbody>{
                <tr key={index} >
                    
                    <td>{list.name}</td>
                    <td>{list.userid}</td>
                    <td>{list.emailid}</td>
                    <td> <button type="button" class="btn btn-danger" onClick={this.handleDelete(this.index)}>Delete</button></td>


                </tr>
                }</tbody>
                
                 })}
        

                
            









             </table>
             </div>
            </div>
 
           

        )
    }
}

export default JasonArrayForm
