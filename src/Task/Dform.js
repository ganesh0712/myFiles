import React, { Component } from 'react'

export class Dform extends Component {
    initialState={
        name:'',
        emailid : '',
        userid: ''
    }
    state=this.initialState;

    handleChange= event=>{
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
        
    }



    submitform= event=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }









    render() {
        const {name,emailid,userid}= this.state;
        return (<div>
            <form>
                <div>
                    <label>
                        Name :
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>

                </div>
                <div>
                    <label>
                        Email ID:
                <input type="text" name="emailid" value={emailid}  onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        User ID :
                <input type="text" name="userid" value={userid} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <button type={'button'}value="submit" onClick={this.submitform}>submit</button>
                </div>
            </form>
        </div>
        )
    }
}

export default Dform
