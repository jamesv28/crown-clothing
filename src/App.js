import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomepageComponent from './pages/homepag/homepage.component';

const hatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomepageComponent} />  
        <Route exact path="/hats" component={hatsPage} />
      </Switch>
    </div>
  );
}

export default App;
