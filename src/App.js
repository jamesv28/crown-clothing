import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomepageComponent from './pages/homepag/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomepageComponent} />  
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
