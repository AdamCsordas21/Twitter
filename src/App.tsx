import React, { FC } from 'react';
import './App.css';

interface AppProps {
  tweets: Tweet[]
}

export interface Tweet {
  author: string
  body: string
}

const App: FC<AppProps> = ({ tweets }) => {
  return (
    <div className="App">
      <main data-testid="main-section">
        <h1>Home</h1>
        {tweets.map((tweet) => (
          <article>
            <h3>{tweet.author}</h3>
            {tweet.body}
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
