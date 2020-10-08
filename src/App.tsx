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
        {tweets.length > 0 &&
          <article>
            <h3>{tweets[0].author}</h3>
            {tweets[0].body}
          </article>
        }
      </main>
    </div>
  );
}

export default App;
