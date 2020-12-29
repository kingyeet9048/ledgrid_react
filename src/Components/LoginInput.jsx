import React, { Component, useState } from 'react';
import '../styles/_LoginInput.css';

let response = "hello world";

class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userInput = React.createRef();
        this.passInput = React.createRef();
        this.state = {
            response: response,
            responded: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert("Submitted. Reaction will encur later.\n");
        fetch("http://192.168.1.136:3010/login", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        responded: true
                    });
                    console.log(result);
                },
                (error) => {
                    this.setState({
                        response: error,
                        responded: true
                    });
                    console.log(error);
                }
            );
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="username" placeholder="Username" name="username" ref={this.userInput} />
                <br/>
                <input type="password" id="password" placeholder="Password" name="password" ref={this.passInput} />
                <br/>
                <input type="submit" value="Login" className="btn btn-outline-light" onChange={this.state.responded ? alert(this.state.response['auth']) : null}/>
            </form>
        );
    }
}

export default LoginInput;