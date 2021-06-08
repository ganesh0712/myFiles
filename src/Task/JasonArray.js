import React, { Component } from 'react'

 class JasonArray extends Component {
constructor(props) {
    super(props)

    this.state = {
                name: '',
                userid: '',
                emailid: '',
                employes: []
         
    }
}





handleData =(event)=>{
    this.setState({[event.target.name] : event.target.value})
    //console.log(this.state.name)
}


submitData=(event)=>{
    event.preventDefault();

    let employes=[...this.state.employes,{name: this.state.name, userid: this.state.userid, emailid:this.state.emailid }];
    employes.push({name: this.state.name},
        {userid: this.state.userid},
        {emailid: this.state.emailid})
        console.log(employes)

}


    render() {
        return (
            <div>
                         
                 <form onSubmit={this.submitData}>
                <div>
                <label>
                    Name :
                    <input type="text" name="name" onChange={this.handleData} />
                </label>

                </div>
                <div>
                <label>
                    Email ID: 
                    <input type="text" name="emailid" onChange={this.handleData} />
                </label>
                </div>
                <div>
                <label>
                    User ID : 
                    <input type="text" name="userid" onChange={this.handleData} />
                </label>
                </div>
                <div>
                    <button type={'submit'}>submit</button>
                </div>
            </form>
          
            
            </div>
        )
    }
}

export default JasonArray
