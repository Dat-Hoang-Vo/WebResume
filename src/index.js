import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <Auth0Provider
    domain="dev-nfi0ru81.us.auth0.com"
    clientId="sDfJppqbUaPKzVaMma6craqcpruiRpOv"
    redirectUri={"http://localhost:3000/authLoggedIn"}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>,
  document.getElementById('root')
);
