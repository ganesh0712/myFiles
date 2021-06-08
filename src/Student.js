import React, { Component } from "react";
import map from "./"


class Student extends Component
{
    constructor(){
        super();
        this.state = {
            message :"Welcome "
        }}
        changeMessage() {
            this.setState({
                message : "Thank you for visiting"
            })
        }

    
    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={()=> this.changeMessage()}>Subscribe</button>
                
            </div>
        )
    }

}
export default Student;