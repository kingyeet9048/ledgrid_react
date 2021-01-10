import React, { Component } from 'react';
import LoginPerson from './../../../public/login_person.png';
import '../../styles/Login.css';
import  LoginInput from '../LoginInput';
import { Fetcher } from './../RequestHandler';

const loginStatus = {
    unauthorized : "Username or password is incorrect. Please try again.",
    sessionExpired: "Session Expired. Please Login again.",
    passwordChange: "Password change failed. Please try again.",
    default: ""
} ;

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            loginStatus: loginStatus,
            response: null,
            waiting: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({waiting : true});
        Fetcher("/login", (error, result)=> {
            console.log(error ? error : result);
            this.setState({
                response : result,
                waiting : false
            });
            this.props.history.push("/home");
        });
    }

    render() {
        return(
            <React.Fragment>
                <div id="loginContainer">
                    <header className="center" >WSU CS Project - LedGrid</header>
                    <img src={LoginPerson} className="profile" alt="profile" />  
                    <p className="p1">{loginStatus.default}</p>   
                    <LoginInput 
                        handleSubmit={this.handleSubmit}
                        waiting={this.state.waiting}
                    />  
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
