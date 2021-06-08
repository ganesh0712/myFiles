import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage1 from './HomePage1'
import Register from './Register'
import EditComponent from './EditComponent'
import React from 'react'

function Main() {
    return (
        <BrowserRouter>
      <ul>
         <Link to='/'>home</Link>
         <Link to='/register'></Link>
         <Link to='/editcomponent'></Link>
       </ul>
       <Switch>
         <Route exact path='/' component={HomePage1}></Route>
         <Route path='/register' component={Register}></Route>
         <Route path='/editcomponent' component={EditComponent}></Route>
       </Switch>
</BrowserRouter>
    )
}

export default Main

