import React from 'react'
import { Dispatch, FC, SetStateAction, useState } from "react";
import { TweetModel } from ".";
import userImg from "./images/UserImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faImage,
  faPollH,
  faSmile,
  faCalendarAlt,
  faGrinSquintTears,
} from "@fortawesome/free-solid-svg-icons";

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

export interface NewTweetSectionProps {
  tweets: TweetModel[]
  setTweets: Dispatch<SetStateAction<TweetModel[]>>
}

const NewTweetSection: FC<NewTweetSectionProps> = ({ tweets, setTweets }) => {
  const [newTweetBody, changeTweetBody] = useState<string>("");
  return (
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
  )
}

export default NewTweetSection