import React, { Component } from 'react';
import LoginPerson from './../../../public/login_person.png';
import '../../styles/Login.css';
import  LoginInput from '../LoginInput';
import { Link } from 'react-router-dom';

const loginStatus = {
    unauthorized : "Username or password is incorrect. Please try again.",
    sessionExpired: "Session Expired. Please Login again.",
    passwordChange: "Password change failed. Please try again.",
    default: ""
} ;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: loginStatus
        };
    }

    render() {
        return(
            <React.Fragment>
                <div id="loginContainer">
                    <header className="center" >WSU CS Project - LedGrid</header>
                    <img src={LoginPerson} className="profile" alt="profile" />  
                    <p className="p1">{loginStatus.default}</p>   
                    <LoginInput />  
                    <Link to="ResetPassword" className="resetPassword">Reset Password</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
