import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/dashboard/dashboard'

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
             <Route exact path="/" component={LoginPage} />
        </Switch>
    )
}