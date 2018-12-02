import React, { Component } from 'react';
import Validator  from 'validator';
import InlineError from '../../components/InlineError/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }
    onChange = e =>
        this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0){
            this.setState({
                loading: true
            })
            this.props.submit(this.state.data)
            .catch(err => this.setState({
                errors: err.response.data.errors, loading: false
            }));
        }

    }
    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
      };
    render(){  
        const { data, errors, loading } = this.state
        return(
            <form onSubmit={this.onSubmit} loading={loading}>
                <label htmlFor="Email">Email</label>
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
                <button type="submit">Login</button>
            </form>
        )

    }
};

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    //loading: PropTypes.bool
};
export default LoginForm;