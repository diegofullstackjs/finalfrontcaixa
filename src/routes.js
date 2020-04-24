import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'

export default function Routes(){
    return(
        <Switch>
             <Route exact path="/" component={LoginPage} />
        </Switch>
    )
}