import React, { Component } from 'react'

export class FetchData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        this.fetchUser();
        // console.log(this.state)
    }
    
    fetchUser(){
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data=> this.setState({
            user:data
        }))
        .catch(error=>console.log(error))
    }
    render() {
        const{user,errorMsg}= this.state
        return (
            <div className="container">
            <table className="table">
            <thead>
                <tr>
                <th>Login</th>
                <th>Id</th>
                <th>avtar_url</th>
                </tr>
            </thead>
            <tbody>
                {user.length?user.map(users=>{
                        console.log('in user map')
                    const {login,id,avatar_url}=users
                    return(
                        <tr key={id}>
                            <td>{login}</td>
                            <td>{id}</td>
                            <td>{avatar_url}</td>
                        </tr>
                    )
                }):<h2 style={{color:"red"}}>{errorMsg}</h2>}
            </tbody>
        </table>

        </div>
        )
    }
}

export default FetchData
