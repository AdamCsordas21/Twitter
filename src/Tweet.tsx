import React, { FC, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
  flex: 1 1 300px;
`;

const Button = styled.button<TweetButton>`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  color: inherit;
  background: inherit;
  font-family: inherit;
  font-size: 0.7em;
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
      color: rgb(${(props) => props.activeColour});

      &:first-child {
        background: rgba(${(props) => props.activeColour}, 10%);
        border-radius: 50%;
      }
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

interface FlexButtonProps {
  activeColour: string;
  title: string;
  label: string;
  icon: IconDefinition;
  itemCount?: number;
}

export const FlexButton: FC<FlexButtonProps> = ({
  activeColour,
  title,
  label,
  icon,
  itemCount,
}) => {
  const [count, setCount] = useState<number>(itemCount ?? 0)
  return (
    <FlexItem>
      <Button
        data-testid={`${title}-button`}
        activeColour={activeColour}
        title={title}
        onClick={() => setCount(count + 1)}
      >
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        {count && <span aria-label={label}>{count}</span>}
      </Button>
    </FlexItem>
  );
};

interface TweetButton {
  activeColour: string;
}

const Tweet: FC<TweetModel> = ({
  author,
  body,
  createdOn,
  comments,
  retweets,
  likes,
  shares,
}) => (
  <article className="tweet" data-testid="tweet">
    <h3>
      {author.name} {author.tag}{" "}
      <TweetCreatedOn>{formatDate(createdOn)}</TweetCreatedOn>
    </h3>
    {body}
    <FlexBox>
      <FlexButton
        activeColour="29, 161, 242"
        title="comment"
        label="comments"
        icon={faCommentDots}
        itemCount={comments}
      />
      <FlexButton
        activeColour="23, 191, 99"
        title="retweet"
        label="retweets"
        icon={faRetweet}
        itemCount={retweets}
      />
      <FlexButton
        activeColour="224, 36, 94"
        title="like"
        label="likes"
        icon={faHeart}
        itemCount={likes}
      />
      <FlexButton
        activeColour="29, 161, 242"
        title="share"
        label="shares"
        icon={faShare}
        itemCount={shares}
      />
    </FlexBox>
  </article>
);

export default Tweet;
