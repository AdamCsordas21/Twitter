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
  padding-top: 0.5em;
  display: flex;
`;

const FlexItemLabel = styled.label`
  flex: 1 1 auto;
`;

const Tweet: FC<TweetModel> = ({ author, body, createdOn, likes }) => (
  <article className="tweet" data-testid="tweet">
    <h3>
      {author.name} {author.tag}{" "}
      <TweetCreatedOn>{formatDate(createdOn)}</TweetCreatedOn>
    </h3>
    {body}
    <FlexBox>
      <FlexItemLabel>
        <FontAwesomeIcon icon={faCommentDots} />
      </FlexItemLabel>
      <FlexItemLabel>
        <FontAwesomeIcon icon={faRetweet} />
      </FlexItemLabel>
      <FlexItemLabel>
        <FontAwesomeIcon icon={faHeart} /> {likes}
      </FlexItemLabel>
      <FlexItemLabel>
        <FontAwesomeIcon icon={faShare} />
      </FlexItemLabel>
    </FlexBox>
  </article>
);

export default Tweet;
