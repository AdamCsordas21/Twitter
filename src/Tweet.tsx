import React, { FC } from 'react';
import styled from 'styled-components';

export interface Author {
  name: string
  tag: string
}

export interface TweetProps {
  author: Author
  body: string
  createdOn: string
}

const TweetCreatedOn = styled.span`
  font-size: 0.8em;

  &::before {
    content: '· ';
  }
`

const Tweet: FC<TweetProps> = ({ author, body, createdOn }) => (
  <article data-testid="tweet">
    <h3>{author.name} {author.tag} <TweetCreatedOn>{createdOn}</TweetCreatedOn></h3>
    {body}
    <h5>reply retweet like share</h5>
  </article>
)

export default Tweet;
