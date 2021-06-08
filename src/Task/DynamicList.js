import React, { Component } from 'react'

class DynamicList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        list:[{name : " ", age : " "}]
        }
    }
    


    handleData=(event)=>{
        this.setState({[event.target.name] : event.target.value})

    }

    submitData=(event)=>{

        
    }


    // submitData=(event)=>{
    //     this.setState((prevstate)=> ({
    //         list: [ ...prevstate.list, {name : '',age:''}]
    //     }))
    //     alert("List update")
    //     event.preventDefault();
    // }


    render() {
        const list2= this.state.list.map(function(item){
            return <li> {item} </li>;
       })
        return (
            <form onSubmit={this.submitData}>
                <div>
                    <label>Enter name :</label>
                    <input type={Text} value ={this.state.list.name} name ='name' onChange = {this.handleData} />  
                </div>   
                <div>
                    <label>Enter age :</label>
                    <input type={"number"} value ={this.state.list.age} name ='age' onChange = {this.handleData} />  
                </div>    
                <div>
                    <button type={'submit'}>submit</button>
                </div> 
                <div>
                    <ul>{item}</ul>
                    
                </div>  
                     
            </form>
            
        )
        
    
    }
}

export default DynamicList
