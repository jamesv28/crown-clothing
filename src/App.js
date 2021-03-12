import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
// import './App.css';
import {GlobalStyles} from './global.styles';

import Header from './components/header/header.component';
import HomepageComponent from './pages/homepag/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.page';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {createUserProfileDocument, auth} from './firebase/firebase.utils';
import AboutPage from './pages/about/about.page';
import { selectCurrentUser } from './redux/user/user.selectors';
import NotFoundComponent from './components/not-found/not-found.component';

class App extends Component  {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <main>
          <Switch>
            <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
            <Route exact path="/" component={HomepageComponent} />  
            <Route path="/shop" component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route path="*" component={NotFoundComponent} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
