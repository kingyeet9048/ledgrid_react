import React, { Component } from 'react';
import '../styles/_LoginInput.css';
import RequestHandler from './RequestHandler';


class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userInput = React.createRef();
        this.passInput = React.createRef();
        this.state = {
            response: RequestHandler.response,
            responded: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            response : RequestHandler.Fetcher("/login", "GET"),
            responded: true
        });
    }
    render() { 
        const alertMessage = this.state.responded ? alert(this.state.response['auth']) : null;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="username" placeholder="Username" name="username" ref={this.userInput} />
                <br/>
                <input type="password" id="password" placeholder="Password" name="password" ref={this.passInput} />
                <br/>
                <input type="submit" value="Login" className="btn btn-outline-light" onChange={alertMessage}/>
            </form>
        );
    }
}

export default LoginInput;