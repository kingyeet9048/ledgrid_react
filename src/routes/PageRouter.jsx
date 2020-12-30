import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Components/Login';
import ResetPassword from './../Components/ResetPassword';

const PageRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/ResetPassword" component={ResetPassword} />
        </Switch>
    );
};

export default PageRouter;
