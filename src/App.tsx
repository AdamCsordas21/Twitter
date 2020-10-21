import React, { FC } from "react";
import "./App.css";
import Tweet, { TweetProps } from "./Tweet";
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

interface AppProps {
  tweets: TweetProps[];
}

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <header>
      <FontAwesomeIcon icon={faTwitter} /> Home
    </header>
    <header>
      <div>
        <img src={userImg} alt="User Profile Img" />
      </div>
      <NewTweetInput placeholder="What's happening?"></NewTweetInput>
      <h5>
        <FontAwesomeIcon icon={faImage} />{" "}
        <FontAwesomeIcon icon={faGrinSquintTears} />{" "}
        <FontAwesomeIcon icon={faPollH} />{" "}
        <FontAwesomeIcon icon={faSmile} />{" "}
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

export default App;
