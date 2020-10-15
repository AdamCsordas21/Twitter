import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export interface Author {
  name: string;
  tag: string;
}

export interface TweetProps {
  author: Author;
  body: string;
  createdOn: string;
}

const TweetCreatedOn = styled.span`
  font-size: 0.8em;

  &::before {
    content: "· ";
  }
`;

const Tweet: FC<TweetProps> = ({ author, body, createdOn }) => (
  <article data-testid="tweet">
    <h3>
      {author.name} {author.tag} <TweetCreatedOn>{createdOn}</TweetCreatedOn>
    </h3>
    {body}
    <h5>
      <FontAwesomeIcon icon={faCommentDots} />{" "}
      <FontAwesomeIcon icon={faRetweet} />{" "}
      <FontAwesomeIcon icon={faHeart} />{" "}
      <FontAwesomeIcon icon={faShare} />
    </h5>
  </article>
);

export default Tweet;
