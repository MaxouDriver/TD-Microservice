import React from "react";
import AllTasks from './Tasks';
import Login from './Login';
import Signup from './Signup';
import { Route, Switch } from "react-router-dom";

export default ( {childProps }) =>
<Switch>
   <Route exact path="/" component={AllTasks} props={childProps}/>
   <Route path="/login" exact component={Login} props={childProps}/>
   <Route path="/signup" exact component={Signup} props={childProps} />
</Switch>;