import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss';

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.prevent.default();
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        label="Password"
                        handleChange={this.handleChange}
                        required 
                    />
                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        )
    }
}

export default SignInComponent;