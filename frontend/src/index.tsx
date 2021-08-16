import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import  Header from './components/header/header';
import  Footer from './components/footer/footer';
import Signup from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import SinglePost from './components/post/singlePost';
import Search from './components/search/search';
import Admin from './admin';
import Create from './components/admin/createupload';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';

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
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/create' component={Create} />
          <Route exact path='/admin/edit/:id' component={Edit} />
          <Route exact path='/admin/delete/:id' component={Delete} />
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
