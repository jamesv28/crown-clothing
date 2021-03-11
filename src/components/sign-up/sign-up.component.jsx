import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUpComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {
            displayName, 
            email, 
            password, 
            confirmPassword
        } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch(err) {
            console.error(err)
        }
        
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {
            displayName, 
            email, 
            password, 
            confirmPassword
            } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span className="sub-title">Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                        label="Display Name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        label="Confirm Password"
                    />
                    <Button type="submit" disabled={displayName.length && email.length && password.length && confirmPassword.length >= 1 ? false : true}>Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUpComponent;