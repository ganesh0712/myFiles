import React, { Component } from "react";


class Superhero  extends Component
{
    render()
    {
        return
         <h1>  
            {this.props.name} konws as {this.props.heroname}</h1>;
    }
}
export default Superhero;
