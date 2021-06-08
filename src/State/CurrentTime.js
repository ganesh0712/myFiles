 import React, { Component } from 'react'
 import { render } from 'react-dom';


 
 
 class CurrentTime extends Component {


    
 constructor(props) {
    super(props)


    this.state = {   
         currentDateTime: Date().toLocaleString()

         
    }
}
     render() {
         return (
             <div>
                  <h2>      { this.state.currentDateTime }
                                                  

                 </h2>
                 <h2>
                 <button > refresh time</button>

                 </h2>
             </div>
         )
     }
 }
 
 export default CurrentTime
 