import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {

    submit = data => {
        console.log(data);
    }
    render() {
        return(
            <div>
                <LoginForm submit={this.submit}/>
            </div>

        )
    } 
};

export default Login;