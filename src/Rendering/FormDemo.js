import React, { Component } from 'react'

 class FormDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            uname : '',
             address : '',
             id:"",
             dob:"",
             
        }
    }
    //  handlenamechange= (event) => {
    //      this.setState({uname : event.target.value
    //     })
    //  }

    //  handlerAddressChange=(event) =>{
    //     this.setState({address : event.target.value})
    //  }

     handleData =(event)=>{
         this.setState({[event.target.name] : event.target.value})
     }

     submitData =(event)=>{
         alert(`${this.state.name} ${this.state.address}`)
         event.preventDefault();

     }
    render() {
        return (
          <form onSubmit={this.submitData}>
              <div>             
                   <label>Name : </label>
                      <input type={Text} value ={this.state.name} name ='name' onChange = {this.handleData} /> 
              </div>
              <div>
                   <label>Adress : </label>
                   <input type={Text} value={this.state.address} name ='address' onChange= {this.handleData}/>
                </div>
                <div>
                    <button type={'submit'}>submit</button>
                </div>
</form>
        )
    }
}

export default FormDemo















































