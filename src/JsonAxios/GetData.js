import React, { Component } from 'react'
import axios from 'axios'
class GetData extends Component {
    state={
        user:[],
        errorMsg:""
    }
    fetchUser(){
        axios.get('https://reqres.in/api/users')
        .then(response=>{console.log(response.data.data); this.setState({user:response.data.data})}
        ).catch(error=>{console.log(error); this.setState({errorMsg:"Error in data fetching...!!!"})})  
     }
    componentDidMount(){
        this.fetchUser();
    }
    render() {
        const {user,errorMsg}=this.state
        return (
            <div className="container">
                <table className="table">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {user.length?user.map(users=>{
            
                        const {first_name,last_name,email}=users
                        return(
                            <tr key={first_name}>
                                <td>{first_name}</td>
                                <td>{last_name}</td>
                                <td>{email}</td>
                            </tr>
                        )
                    }):<h2 style={{color:"red"}}>{errorMsg}</h2>}
                </tbody>
            </table>

            </div>
                )
    }
}

export default GetData
