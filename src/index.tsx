import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export interface TweetModel {
  author: Author;
  body: string;
  createdOn: string;
}

export interface Author {
  name: string;
  tag: string;
}

const tweets: TweetModel[] = [
  {
    author: { name: 'Adam', tag: '@AdamCsordas21' },
    body: 'Hello World', 
    createdOn: '1 h'
  },
  {
    author: { name: 'Osh', tag: '@oshdev' },
    body: 'Hello Adam', 
    createdOn: '2 h'
  },
  {
    author: { name: 'Nela', tag: '@nelanelka1' },
    body: 'Hello Osh', 
    createdOn: '3 h'
  },
]

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
