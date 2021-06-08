import axios from 'axios';
import React, { Component } from 'react'

export class PostData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            first_name:'',
            last_name:'',
            email:''
        }
    }
    changeHandler=event=>{
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }
    submitData=(event)=>{
        event.preventDefault();
        // console.log(this.state)
        axios.post('https://reqres.in/api/users', this.state)
        .then((response)=>{
                console.log(response)
        }).catch((error)=>{
                console.log(error)
        })
    }
    render() {
        // const {first_name,last_name,email}=this.state
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <div>
                    <label>First name:</label>
                    <input type="text" value={this.state.first_name} name="first_name" onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <label>Last name:</label>
                    <input type="text" value={this.state.last_name} name="last_name" onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <label>email</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <button type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostData
