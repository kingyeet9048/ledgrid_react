import React, { Component } from 'react';
import LoginPerson from './../../public/login_person.png';
import './../styles/_Login.scss';

class Login extends Component {
    render() {
        return(
            <div id="LoginContainer">
                <img src={LoginPerson} className="profile" alt="profile" />          
            </div>
        );
    }
}

export default Login;
