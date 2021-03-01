import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import {auth} from '../../firebase/firebase.utils';

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

    handleSubmit = async event => {
        event.preventDefault();
        const {
            email,
            password
        } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }
        catch(err) {
            console.log('error',err);
        }
        
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account.</h2>
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
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComponent;