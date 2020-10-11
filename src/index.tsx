import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Tweet } from './App';
import * as serviceWorker from './serviceWorker';

const tweets: Tweet[] = [
  { author: { name: 'Adam', tag: '@AdamCsordas21' }, body: 'Hello World' },
  { author: { name: 'Osh', tag: '@oshdev' }, body: 'Hello Adam' },
  { author: { name: 'Nela', tag: '@nelanelka1' }, body: 'Hello Osh' },
]

ReactDOM.render(
  <React.StrictMode>
    <App tweets={tweets} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
