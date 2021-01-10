import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Components/Pages/Login';
import ResetPassword from '../Components/Pages/ResetPassword';
import Home from '../Components/Pages/Home';

const PageRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/ResetPassword" component={ResetPassword} />
            <Route path="/home" component={Home} />
        </Switch>
    );
};

export default PageRouter;
