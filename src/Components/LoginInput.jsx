import React, { Component } from 'react';
import '../styles/LoginInput.css';
import Loading from './Loading';
import { Fetcher } from './RequestHandler';
import { Link } from 'react-router-dom';




class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.loadingState = this.loadingState.bind(this);
        this.userInput = React.createRef();
        this.passInput = React.createRef();
        this.state = {
            response: null,
            waiting: false,
            handler : null
        }
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
        });
    }

    renderForm() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" placeholder="Username" name="username" ref={this.userInput} />
                    <br/>
                    <input type="password" id="password" placeholder="Password" name="password" ref={this.passInput} />
                    <br/>
                    <input type="submit" value="Login" className="btn btn-outline-light" />
                </form>
                <Link to="ResetPassword" className="resetPassword">Reset Password</Link>
            </div>
        );
    }

    loadingState() {
        return <Loading />;
    }

    render() { 
        let { waiting, handler } = this.state;
        handler = waiting ? this.loadingState() : this.renderForm();       
        return (
            handler
        );
    }
}

export default LoginInput;