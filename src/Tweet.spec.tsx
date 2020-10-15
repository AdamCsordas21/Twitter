import React from 'react';
import { render } from '@testing-library/react';
import Tweet, { Author } from './Tweet';

describe('tweets', () => {
  it('should render tweets', () => {
    const author: Author = { name: 'Adam', tag: '@AdamCsordas21' }
    const body = 'Hello Twitter World'
    const createdOn = '32 mins ago'
    const reply = 'reply'
    const retweet = 'retweet'

    const { getByText } = render(
      <Tweet
        author={author}
        body={body}
        createdOn={createdOn}
        reply={reply}
        retweet={retweet}
      />
    );
    expect(getByText(author.name, { exact: false })).toBeInTheDocument();
    expect(getByText(author.tag, { exact: false })).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
    expect(getByText(createdOn)).toBeInTheDocument();
    expect(getByText(reply, {exact: false})).toBeInTheDocument();
    expect(getByText(retweet, {exact: false})).toBeInTheDocument();
  })
});
