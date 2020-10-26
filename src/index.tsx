import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tweets from './tweets.json';

export interface TweetModel {
  author: Author;
  body: string;
  createdOn: string;
}

export interface Author {
  name: string;
  tag: string;
}

export interface User {
  name: string
  tag: string
}

export interface UserAuth {
  name: string
  passwordHash: string
  passwordSalt: string
}

ReactDOM.render(
  <React.StrictMode>
    <App initialTweets={tweets} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
