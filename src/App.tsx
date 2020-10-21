import React, { FC, useState } from "react";
import "./App.css";
import { TweetModel } from "./";
import Tweet from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faPollH,
  faSmile,
  faCalendarAlt,
  faGrinSquintTears,
} from "@fortawesome/free-solid-svg-icons";
import userImg from "./images/UserImg.jpg";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const NewTweetInput = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  background: inherit;
  border-radius: 2px;
`;

const NewTweetButton = styled.button`
  height: 2.5em;
  border-radius: 0.5em;
  border: none;
  color: white;
  background-color: lightblue;
`;

interface AppProps {
  initialTweets: TweetModel[];
}

const App: FC<AppProps> = ({ initialTweets }) => {
  const [tweets, setTweets] = useState(initialTweets);
  const [newTweetBody, changeTweetBody] = useState("");
  return (
    <div className="App">
      <header>
        <FontAwesomeIcon icon={faTwitter} /> Home
      </header>
      <header>
        <div>
          <img src={userImg} alt="User Profile Img" />
        </div>
        <NewTweetInput
          placeholder="What's happening?"
          onChange={(event) => changeTweetBody(event.target.value)}
          value={newTweetBody}
        />
        <NewTweetButton
          onClick={() => {
            setTweets([
              ...tweets,
              {
                author: { name: "adam", tag: "@adam" },
                body: newTweetBody,
                createdOn: "now",
              },
            ]);
            changeTweetBody('')
          }}
        >
          Tweet
        </NewTweetButton>
        <h5>
          <FontAwesomeIcon icon={faImage} />{" "}
          <FontAwesomeIcon icon={faGrinSquintTears} />{" "}
          <FontAwesomeIcon icon={faPollH} /> <FontAwesomeIcon icon={faSmile} />{" "}
          <FontAwesomeIcon icon={faCalendarAlt} />
        </h5>
      </header>
      <main data-testid="main-section">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </main>
    </div>
  );
};

export default App;
