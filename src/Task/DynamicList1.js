import React, { Component } from "react";


class DynamicList1 extends Component {
  state = {
    names: ["Ganesh",],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewName = () => {
    let { names, input } = this.state;
    names.push(input);
    this.setState({ names: names })
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.saveInput} />
        <button onClick={this.addNewName} name='add'> Add Name </button>
        <ol>
          {this.state.names.map((name, index) => {
            return <li key={index}> {name}</li>
            //          return <button type="radio" onClick={alert("name selected")}> <li key={sIndex}> {name}</li></button>

          })}
        </ol>
      </div>
    );
  }
}
export default DynamicList1
