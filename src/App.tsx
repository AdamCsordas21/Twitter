import React, { FC } from 'react';
import './App.css';
import Tweet, { TweetProps } from './Tweet';

interface AppProps {
  tweets: TweetProps[]
}

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <header>Home</header>
    <main data-testid="main-section">
      {tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)}
    </main>
  </div>
);

export default App;
