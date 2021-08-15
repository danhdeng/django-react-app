import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import  Header from './components/Header/Header';
import  Footer from './components/Footer/Footer';
import Signup from './components/Auth/register';
import Login from './components/Auth/login';
import Logout from './components/Auth/logout';
import SinglePost from './components/Post/singlePost';
import Search from './components/search/search';
const routing=(
  <Router>
    <React.StrictMode>
      <Header />
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/register' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/post/:id' component={SinglePost} />
          <Route exact path='/search' component={Search} />
        </Switch>
        <Footer />
    </React.StrictMode>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
