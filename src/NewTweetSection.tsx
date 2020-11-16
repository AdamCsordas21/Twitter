import React from "react";
import { FC, useState } from "react";
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
  color: white;

  &::placeholder {
    color: grey;
  }
`;

const NewTweetButton = styled.button`
  height: 2.5em;
  border-radius: 0.5em;
  border: none;
  color: white;
  background-color: rgb(29, 161, 242);
`;

export type AddTweetFn = (body: string) => void;
export interface NewTweetSectionProps {
  addTweet: AddTweetFn;
}

const NewTweetSection: FC<NewTweetSectionProps> = ({ addTweet }) => {
  const [newTweetBody, changeTweetBody] = useState<string>("");
  return (
    <header>
      <NewTweetInput
        placeholder="What's happening?"
        onChange={(event) => changeTweetBody(event.target.value)}
        value={newTweetBody}
      />
      <NewTweetButton
        onClick={() => {
          addTweet(newTweetBody);
          changeTweetBody("");
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
  );
};

export default NewTweetSection;
