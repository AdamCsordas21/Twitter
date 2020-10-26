import React, { FC, useState } from "react";
import "./App.css";
import { TweetModel } from "./";
import Tweet from "./Tweet";
import Header from "./Header";
import NewTweetSection, { AddTweetFn } from "./NewTweetSection";

interface AppProps {
  initialTweets: TweetModel[];
}

const App: FC<AppProps> = ({ initialTweets }) => {
  const [tweets, setTweets] = useState<TweetModel[]>(initialTweets);
  const addTweetFn: AddTweetFn = (newTweetBody: string) =>
    setTweets([
      ...tweets,
      {
        author: { name: "adam", tag: "@adam" },
        body: newTweetBody,
        createdOn: "now",
      },
    ]);

  return (
    <div className="App">
      <Header />
      <NewTweetSection addTweet={addTweetFn} />
      <main data-testid="main-section">
        {/* tweets */}
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </main>
    </div>
  );
};

export default App;
