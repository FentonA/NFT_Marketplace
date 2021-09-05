import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './index.css';
// import Login from './components/Login';
// import Logout from './components/Logout';
import Signup from './components/Signup';
import User from './components/User'; 
import NFTUpload from './pages/NFT-creation/NFTCreation.component';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider appId="SR9V1LahdRPnHl5EUANNEwqYkyYKQwECg8EHB9Dn" serverUrl="https://9fph4mx2trmq.bigmoralis.com:2053/server">
      {/* <Login />*/}
      <BrowserRouter>
      <Switch>
          <Route exact path='/sign-up' component = {Signup}/>
          <Route exact path ='/create' component = {NFTUpload}/>
          <Route exact path ='/user' componenent = {User}/>
      </Switch>
      </BrowserRouter >
      {/* <Logout/> */}
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
