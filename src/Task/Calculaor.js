import React, { Component } from 'react'

 class Calculaor extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              number1: '' ,
              number2: '',
              ans : ''
         }
     }
     

     handleData=(event)=>{
       //  alert(this.state.number1)
       // const re = /^[0-9\b]+$/;
       this.setState({[event.target.name] : event.target.value})
        // if((event.target.value === '' || re.test(event.target.value)))
        // {
        //  this.setState({[event.target.name] : event.target.value})
        // }
     }
     handleAdditon=(event)=>{

    
         alert( +this.state.number1+ +this.state.number2)

         event.preventDefault();
         this.setState({ans :+this.state.number1 + +this.state.number2 })

     }

     handleSubstraciton=(event)=>{
         alert(+this.state.number1 - +this.state.number2)
         event.preventDefault();
          this.setState({ans :+this.state.number1 - +this.state.number2 })

     }
     handleMultiplication=(event)=>{
            alert(this.state.number1 * +this.state.number2)
            event.preventDefault();
            var ans= this.state.number1 * +this.state.number2
             this.setState({ans :+this.state.number1 * +this.state.number2 })

     }




    render() {
        return (
            <form>
                <div>
                <input type={"number"} pattern="[0-9]*" value={this.state.number1} name='number1' onChange = {this.handleData} ></input>
                <input type={"number"} pattern="[0-9]*" value={this.state.number2} name='number2' onChange = {this.handleData} ></input>
                </div>

                <div>
                <button type={'add'}   onClick={ this.handleAdditon}>Add</button>
                <button type={'subtract'} onClick={ this.handleSubstraciton}>Subtract</button>
                <button type={'multiply'} onClick={ this.handleMultiplication }>Multiply</button>



                </div>
                <div>
                <h5 >{this.state.ans}</h5>
                </div>






            </form>
        )
    }
}

export default Calculaor


// Create a  react component for simple calculations like add,sub,mul and div . 
// Take two input type and 4 button 