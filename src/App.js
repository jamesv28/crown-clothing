import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';

import Header from './components/header/header.component';
import HomepageComponent from './pages/homepag/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {createUserProfileDocument, auth} from './firebase/firebase.utils';
import AboutPage from './pages/about/about.page';

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
        <Header />
        <main>
          <Switch>
            <Route exact path="/signin" component={SignInAndSignUpPage} />
            <Route exact path="/" component={HomepageComponent} />  
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path='/about' component={AboutPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
