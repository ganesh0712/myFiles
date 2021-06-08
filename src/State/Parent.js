import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg: "Hello in parent component"
        }
        this.parenmethd=this.parenmethd.bind(this)
    }
    parenmethd(city)
    {
    //    alert (` this message from ${this.state.msg}`)
       alert (" this message from" +this.state.msg+" City "+city)
    }
    

    render() {
        return (
            <div>
                <Child hander={this.parenmethd}/>
            </div>
        )
    }
}

export default Parent
