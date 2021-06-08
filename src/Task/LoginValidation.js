import React, { Component } from 'react'

export class LoginValidation extends Component {
    constructor(props) {
        super(props)
        this.name = React.createRef();

        this.state = {
            title: 'GD Solutions',
          act: 0,
          index: '',
          datas: []
        }
    }
    componentDidMount(){
        this.name.current.focus();
      }
    





    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
      }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }  
    
    render() {
        let datas = this.state.datas;
        return (
          <div className="App">
            <h2>{this.state.title}</h2>
            <form name="myForm" className="myForm">
              <input type="text" name="name" className="your name" className="formField" />
              <input type="text" name="address" className="your address" className="formField" />
              <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
            </form>
            <pre>
              {datas.map((data, i) =>
                <li key={i} className="myList">
                  {i+1}. {data.name}, {data.address}
                  <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
                  <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
                </li>
              )}
            </pre>
          </div>
        );
      }
}

export default LoginValidation
