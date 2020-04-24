import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MainPageDashboard from './pages/main';
export default function DashBoardRoutes() {
  return (
    <Switch>
           <Route path="/" component={MainPageDashboard} />
    </Switch>
  );
}
