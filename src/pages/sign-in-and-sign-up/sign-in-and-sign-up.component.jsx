import React from 'react';
import SignInComponent from '../../components/sign-in/sign-in.component';
import SignUpComponent from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (

    <div className="sign-in-and-sign-up">
        <SignInComponent />
        <SignUpComponent />
    </div>
)

export default SignInAndSignUpPage;