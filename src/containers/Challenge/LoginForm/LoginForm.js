import React, { Component } from 'react';
import Validator  from 'validator';
import InlineError from '../../../components/InlineError/InlineError';

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }
    onChange = e => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setStat({errors});

    }
    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    }
    render(){  
        const { data, errors } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                <label htmplFor="Email">Email</label>
                <p><input type="email" 
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={data.email}
                    onChange={this.onChange}
                    />
                {errors.email && <InlineError text={errors.email} />}
                </p>
                <label htmlFor="password">Password</label>
                <p><input type="password" 
                    name="password"
                    id="password"
                    placeholder="Make it secure" 
                    value={data.password}
                    onChange={this.onChange}
                    />
                {errors.password && <InlineError text={errors.password} />}
                </p>
                <button>Login</button>
            </form>
        )

    }
};
export default LoginForm;