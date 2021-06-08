import React, { Component, createContext } from 'react'
    const userContext = React.createContext()
    const username=userContext.Provider
    const userConsumer = userContext.Consumer
    export{username,userConsumer}


export class ContextDemo extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ContextDemo
