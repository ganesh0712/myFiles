import { Component } from "react";
import Superhero from "./Superhero";


class JSXDemo extends Component
{ 
    Display()
    {
        const stud_name= [
            {id :1, s_name: 'Ganesh'},
            {id :2, s_name: 'Ashish'}
        ];

        return( 
            
            <h1> Student id : {this.id} </h1>
        )
    }

}