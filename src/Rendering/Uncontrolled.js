import React, { Component } from 'react'

export class Uncontrolled extends Component {
    constructor(props) {
        super(props)
        
        this.myref = React.createRef();
    }
    componentDidMount(){
        this.myref.current.focus()
    }

    clickHandler=()=>{
        alert(this.myref.current.value)
    }
    
    render() {
        return (
            <form>
            <div>
                <input type='text' ref={this.myref}/>
            </div>
            <div>
               <button onClick={this.clickHandler}>Submit</button>
            </div>
            </form>
        )
    }
}

export default Uncontrolled
