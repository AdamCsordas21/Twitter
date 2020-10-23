import React, { FC, useState } from "react";
import "./App.css";
import { TweetModel } from "./";
import Tweet from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NewTweetSection from "./NewTweetSection";

interface AppProps {
  initialTweets: TweetModel[];
}

const App: FC<AppProps> = ({ initialTweets }) => {
  const [tweets, setTweets] = useState<TweetModel[]>(initialTweets);
  return (
    <div className="App">
      <header>
        <FontAwesomeIcon icon={faTwitter} /> Home
      </header>
      <NewTweetSection tweets={tweets} setTweets={setTweets} />
      <main data-testid="main-section">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </main>
    </div>
  );
};

export default App;
