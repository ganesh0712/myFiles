import React, { Component } from 'react'

export class MainCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comId: "",
            comName: "",

        }
    }
    changeHandler = () => {

    }





    render() {
        const { comId, comName } = this.state;
        return (
            <div>
                <div className="container">
                    <form className="form-horizontal">
                        <div className="form-group row">
                            <label className="control-label col-2">
                                <b>Company ID:</b>
                            </label>
                            <div className="col-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Company ID"
                                    name="comId"
                                    value={comId}
                                    onChange={this.changeHandler} />
                            </div>
                            <label className="control-label col-2">
                                <b>Company Name:</b>
                            </label>
                            <div className="col-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Company ID"
                                    name="comName"
                                    value={comName}
                                    onChange={this.changeHandler} />
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MainCompany
