import React, { FC } from "react";
import "./App.css";
import Tweet, { TweetProps } from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

interface AppProps {
  tweets: TweetProps[];
}

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <header>
      <FontAwesomeIcon icon={faDove} />{" "}Home
    </header>
    <header>
      What's happening?
    </header>
    <main data-testid="main-section">
      {tweets.map((tweet, index) => (
        <Tweet key={index} {...tweet} />
      ))}
    </main>
  </div>
);

export default App;
