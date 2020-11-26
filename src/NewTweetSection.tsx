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

const NewTweetButtons = styled.div`
  display: flex;
`;

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const NewTweetInput = styled.textarea<{ value: string }>`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  background: inherit;
  color: white;
  resize: vertical;
  outline: none;

  border: 1px solid
    ${({ value }) => (!!value ? "rgb(62, 69, 77)" : "transparent")};
  border-radius: 2px;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgb(62, 69, 77);
    border-radius: 2px;
  }

  &::placeholder {
    color: rgb(62, 69, 77);
  }
`;

const NewTweetButton = styled.button`
  border-radius: 50vh;
  border: none;
  outline-style: none;
  color: white;
  background-color: rgb(29, 161, 242);
  flex: 0 1 100px;
  min-width: 80px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem;
`;

const NewTweetIconsButton = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  color: rgb(29, 161, 242);
  background: inherit;
  font-family: inherit;
  font-size: 1.2rem;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: unset;

  & > span {
    padding: 0.5em;
  }

  &:hover,
  &:focus {
    outline: unset;

    & > span {
      color: rgb(29, 161, 242);

      &:first-child {
        background: rgba(29, 161, 242, 10%);
        border-radius: 50%;
      }
    }
  }

  &:active {
    transform: scale(0.9);
  }
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
      <NewTweetButtons>
        <NewTweetIconsButton>
          <span>
            <FontAwesomeIcon icon={faImage} />
          </span>
        </NewTweetIconsButton>
        <NewTweetIconsButton>
          <span>
            <FontAwesomeIcon icon={faGrinSquintTears} />
          </span>
        </NewTweetIconsButton>
        <NewTweetIconsButton>
          <span>
            <FontAwesomeIcon icon={faPollH} />
          </span>
        </NewTweetIconsButton>
        <NewTweetIconsButton>
          <span>
            <FontAwesomeIcon icon={faSmile} />
          </span>
        </NewTweetIconsButton>
        <NewTweetIconsButton>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
        </NewTweetIconsButton>
        <Spacer />
        {/* {JSON.stringify(newTweetBody.length === 0)} */}
        <NewTweetButton
          data-testid="create-new-tweet-button"
          disabled={newTweetBody.length === 0}
          onClick={() => {
            addTweet(newTweetBody);
            changeTweetBody("");
          }}
        >
          Tweet
        </NewTweetButton>
      </NewTweetButtons>
    </header>
  );
};

export default NewTweetSection;
