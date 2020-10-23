import React, { FC, useState } from "react";
import "./App.css";
import { TweetModel } from "./";
import Tweet from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
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
      <header>
        <FontAwesomeIcon icon={faTwitter} /> Home
      </header>
      <NewTweetSection addTweet={addTweetFn} />
      <main data-testid="main-section">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </main>
    </div>
  );
};

export default App;
