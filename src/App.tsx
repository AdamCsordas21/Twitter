import React, { FC } from 'react';
import './App.css';
import Tweet, { TweetProps } from './Tweet';

interface AppProps {
  tweets: TweetProps[]
}

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <main data-testid="main-section">
      <h1>Home</h1>
      {tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)}
    </main>
  </div>
);


export default App;
