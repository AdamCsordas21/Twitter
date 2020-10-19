import React, { FC } from "react";
import "./App.css";
import Tweet, { TweetProps } from "./Tweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDove,
  faImage,
  faPollH,
  faSmile,
  faCalendarAlt,
  faGrinSquintTears
 } from "@fortawesome/free-solid-svg-icons";
 import UserImg from "./images/UserImg.jpg"

interface AppProps {
  tweets: TweetProps[];
}

const App: FC<AppProps> = ({ tweets }) => (
  <div className="App">
    <header>
      <FontAwesomeIcon icon={faDove} />{" "}Home
    </header>
    <header>
      <img src={UserImg} alt="User Profile Img" /><span>What's happening?</span>
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
