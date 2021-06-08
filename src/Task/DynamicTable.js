import React from 'react';

 class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
      act :0,
      index : '',
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    var items = this.state.items;


    if(this.state.act ===0)
    {
    items.push(this.state.message);

    }
    else{
      let index = this.state.index;
      items[index].message=this.state.message
    }
    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }
  handleItemEdit(i){
    var items =this.state.items[i];
    this.state.value = items.message;
    this.setState({
      act :1,
      index : i
    })

  }


  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemEdit.bind(context, i)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <button
          onClick={this.handleClick.bind(this,)}
        >
          Add Item
        </button>
      </div>
    );
  }
}


export default DynamicTable