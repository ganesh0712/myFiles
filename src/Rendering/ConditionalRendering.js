import React, { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isloggedin:true
             
        }
    }
    
    render() {
        
            
                if(this.state.isloggedin)
                    {
                        return <div> welcome Ganesh</div>
                    }
                else
                {
                    return <div> welcome Guest</div>

                }
                
            
        
    }
}

export default ConditionalRendering
