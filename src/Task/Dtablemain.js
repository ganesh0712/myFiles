import React, { Component } from 'react'
import Form from './Dform'
import Tables from './tables'


export class Dtablemain extends Component {
     state={
         users :[
             {
            name:'Ganesh',
            emailid : 'ganesh.dhaek121@gmail.com',
            userid: '1'
             },
             
         ],

         index: ''

     }

     removeuser=(index)=>{
         const {users}= this.state;
         this.setState({users : users.filter((user,i)=>{
             return i!=index
         })
        })
     }
     edituser=(index)=>{
         let user= this.state.users[index]
         this.state.name=user.name
         this.state.userid=user.userid
         this.state.emailid=user.emailid

         this.setState({
             act:1,
             index : index
         });
     }
     
     handleSubmit = (user) => {
        //  user.preventDefault();
         
        this.setState({users: [...this.state.users, user]})
        //  }else{

        //     //  let index=this.state.index;
        //     //  user.name=this.state.name,
        //     //  user.emailid=this.state.emailid,
        //     //  user.userid=this.state.userid
        //  }
    }

    // handleData=(user)=>{
    //     if(user.act===0)
    //     {
    //         this.removeuser(user);
    //     }
    //     else
    //     {
    //         this.edituser(user);
    //     }
    // }



//removeuser={this.removeuser}   edituser={this.edituser}


    render() {
        const{users}= this.state
        return (
            <div>
                 <Tables usersData={users} removeuser={this.removeuser}  />

                 <Form  handleSubmit={this.handleSubmit}/>   
            </div>
        )
    }
}

export default Dtablemain
