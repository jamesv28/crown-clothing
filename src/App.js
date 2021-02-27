import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomepageComponent from './pages/homepag/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignInAndSignUpPage} />
        <Route exact path="/" component={HomepageComponent} />  
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
