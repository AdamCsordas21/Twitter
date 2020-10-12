import React, { FC } from 'react';
import './App.css';

interface AppProps {
  tweets: Tweet[]
}

export interface Author {
  name: string
  tag: string
}

export interface Tweet {
  author: Author
  body: string
}

const Tweet: FC<Tweet> = ({ author, body }) => (
  <article>
    <h3>{author.name} {author.tag}</h3>
    {body}
  </article>
)

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <main data-testid="main-section">
      <h1>Home</h1>
      {tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)}
    </main>
  </div>
);


export default App;
