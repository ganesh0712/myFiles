import React,{ Component } from "react";


class Counter extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            count :2
        };
    }
    increment(){
        this.setState({
            count : this.state.count+2
        });
    };
    reset(){
        this.setState({
            count :  2
        });
    };
    render(){
        return(
            <div><button className='inc' onClick={() => this.increment()}>Increment!</button>
                        <button className='inc' onClick={() => this.reset() }>Reset!</button>

            <h2> Current Count : {this.state.count}</h2>
            </div>
            
        )
    }

}
export default Counter;