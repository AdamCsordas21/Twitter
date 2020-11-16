import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { TweetModel } from "./";
import { formatDate } from "./date-time/date-time";

const TweetCreatedOn = styled.span`
  font-size: 0.8em;

  &::before {
    content: "· ";
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
  flex: 1 1 auto;
`;

interface TweetButton {
  activeColour: string;
}

const Button = styled.button<TweetButton>`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  color: inherit;
  background: inherit;
  font-family: inherit;
  font-size: 0.7em;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: unset;

  & > div {
    display: inline-flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  & > span {
    padding: 0.5em;
  }

  &:hover,
  &:focus {
    outline: unset;

    & > span {
      color: rgb(${(props) => props.activeColour});

      &:first-child {
        background: rgba(${(props) => props.activeColour}, 50%);
        border-radius: 50%;
      }
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Tweet: FC<TweetModel> = ({
  author,
  body,
  createdOn,
  comments,
  retweets,
  likes,
  shares,
}) => {
  return (
    <article className="tweet" data-testid="tweet">
      <h3>
        {author.name} {author.tag}{" "}
        <TweetCreatedOn>{formatDate(createdOn)}</TweetCreatedOn>
      </h3>
      {body}
      <FlexBox>
        <FlexItem>
          <Button activeColour="29, 161, 242" title="comment">
            <span>
              <FontAwesomeIcon icon={faCommentDots} />
            </span>
            {comments && <span aria-label="comments">{comments}</span>}
          </Button>
        </FlexItem>
        <FlexItem>
          <Button activeColour="23, 191, 99" title="retweet">
            <span>
              <FontAwesomeIcon icon={faRetweet} />
            </span>
            {retweets && <span aria-label="comments">{retweets}</span>}
          </Button>
        </FlexItem>
        <FlexItem>
          <Button activeColour="224, 36, 94" title="like">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            {likes && <span aria-label="likes">{likes}</span>}
          </Button>
        </FlexItem>
        <FlexItem>
          <Button activeColour="29, 161, 242" title="share">
            <span>
              <FontAwesomeIcon icon={faShare} />
            </span>
            {shares && <span aria-label="likes">{shares}</span>}
          </Button>
        </FlexItem>
      </FlexBox>
    </article>
  );
};

export default Tweet;
