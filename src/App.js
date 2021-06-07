import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Recomendation } from './components/Recomendation';
import { MainPage } from './components/MainPage';
import { Pagination } from './components/Pagination';
import { Cart } from './components/Cart';
import logo from './images/shop-logo.jpeg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page">
        <div className="frontPage-top">
          <img className="frontPage-logo" src={logo} alt="CompanyLogo"></img>
          <h1 className="frontPage-header">Best Beers... Ever!</h1>
        </div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="frontPage">
              <Pagination />
              <Recomendation />
              <MainPage />
              <Pagination />
            </div>
          </Route>
          <Route exact path="/checkout">
            <div className="frontPage">
              <Cart />
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
