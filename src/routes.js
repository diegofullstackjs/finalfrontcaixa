import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Header from './shared/Header'

export default function Routes(){
    return(
        <Switch>
             <Route exact path="/" component={Header} />
        </Switch>
    )
}