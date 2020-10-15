import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { TweetProps } from './Tweet';

describe('main page', () => {
  it('should render main section', () => {
    const { getByTestId } = render(<App tweets={[]} />);
    const mainElement = getByTestId('main-section');
    expect(mainElement).toBeInTheDocument();
  });

  it('should render tweets', () => {
    const tweets: TweetProps[] = [
      {
        author: { name: 'Adam', tag: '@AdamCsordas21' },
        body: 'Hello Twitter World', 
        createdOn: '32 mins ago', 
        reply: 'Reply', 
        retweet: 'Retweet', 
        like: 'like'
      },
      {
        author: { name: 'Osh', tag: '@oshdev' },
        body: 'Hello Adam', 
        createdOn: '32 mins ago', 
        reply: 'Reply', 
        retweet: 'Retweet', 
        like: 'like'
      }
    ]

    const { getAllByTestId } = render(<App tweets={tweets} />);
    expect(getAllByTestId('tweet')).toHaveLength(2);
  })
});
