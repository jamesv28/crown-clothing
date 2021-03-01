import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomepageComponent from './pages/homepag/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {createUserProfileDocument, auth} from './firebase/firebase.utils';
import AboutPage from './pages/about/about.page';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
