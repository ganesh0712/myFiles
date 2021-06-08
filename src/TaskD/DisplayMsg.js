import React, { Component } from 'react'

class DisplayMsg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isloggedIn: true,
          logout:true,
          message: ''
          
        }
    }
    displaymsg=(e)=>{
        console.log(this.state.message)
        this.state.isloggedIn?<p>{this.state.messsage}</p>:<p>{this.state.message}</p>
    }
    clickHandlers=()=>{
        console.log("logout")
        this.setState({message:"please log in", isloggedIn :false})
        this.displaymsg(this.state.message);
    }
    clickHandler=(e)=>{
        console.log("login")
          this.setState({message:"welcome ganesh"})  
    //    this.setState({message : "welcome ganesh",isloggedIn: true})
     //  console.log(this.state.message)
        this.displaymsg(this.state.message);

    }
    render() {
          
            return (
              
            <div>
                
            <div>
                <button className="btn-lg btn-primary" name="login" onClick={this.clickHandler} >login</button>
                <button className="btn-lg btn-danger" name="logout" onClick={this.clickHandlers} >logout</button>

            </div>
            <div>
                </div>
                
                </div>

        )
    }

}

export default DisplayMsg
