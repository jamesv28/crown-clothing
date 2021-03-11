import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import {auth} from '../../firebase/firebase.utils';
import Strings from '../../language/strings';

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
        const {
            already_have_account,
            _email,
            _password,
            sign_in,
            sign_in_google
        } = Strings;
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">{already_have_account}</h2>
                <span className="sub-title">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        label={_email}
                        handleChange={this.handleChange}
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        label={_password}
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className="buttons">
                        <Button disabled={email.length && password.length >= 1 ? false : true} type="submit">{sign_in}</Button>
                        <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>{sign_in_google}</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComponent;