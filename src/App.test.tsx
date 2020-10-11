import React from 'react';
import { render } from '@testing-library/react';
import App, { Author, Tweet } from './App';

describe('main page', () => {
  it('should render main section', () => {
    const { getByTestId } = render(<App tweets={[]} />);
    const mainElement = getByTestId('main-section');
    expect(mainElement).toBeInTheDocument();
  });

  it('should render tweets', () => {
    const author: Author = { name: 'Adam', tag: '@AdamCsordas21' }
    const body = 'Hello Twitter World'
    const tweets: Tweet[] = [{ author, body }]

    const { getByText } = render(<App tweets={tweets} />);
    expect(getByText(author.name)).toBeInTheDocument();
    expect(getByText(author.tag)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  })
});
