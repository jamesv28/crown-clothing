import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux';
import Button from '../button/button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

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
        const {emailSignInStart} = this.props;
        const {
            email,
            password
        } = this.state;
        emailSignInStart(email,password);
            
    }

    render() {
        const {googleSignInStart} = this.props;

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
                        <Button type="button" onClick={googleSignInStart} isGoogleSignIn>{sign_in_google}</Button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null,mapDispatchToProps)(SignInComponent);