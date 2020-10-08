import React, { FC } from 'react';
import './App.css';

interface AppProps {
  tweets: Tweet[]
}

export interface Tweet {
  author: string
  body: string
}

const Tweet: FC<Tweet> = ({ author, body }) => (
  <article>
    <h3>{author}</h3>
    {body}
  </article>
)

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <main data-testid="main-section">
      <h1>Home</h1>
      {tweets.map((tweet) => <Tweet {...tweet} />)}
    </main>
  </div>
);


export default App;
