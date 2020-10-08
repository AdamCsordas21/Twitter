import React from 'react';
import { render } from '@testing-library/react';
import App, { Tweet } from './App';

describe('main page', () => {
  it('should render main section', () => {
    const { getByTestId } = render(<App tweets={[]} />);
    const mainElement = getByTestId('main-section');
    expect(mainElement).toBeInTheDocument();
  });

  it('should render tweets', () => {
    const author1 = 'Adam'
    const body1 = 'Hello Twitter World'
    const author2 = 'Osh'
    const body2 = 'Hello Adam'
    const tweets: Tweet[] = [
      { author: author1, body: body1 },
      { author: author2, body: body2 },
    ]

    const { getByText } = render(<App tweets={tweets} />);
    expect(getByText(author1)).toBeInTheDocument();
    expect(getByText(body1)).toBeInTheDocument();
    expect(getByText(author2)).toBeInTheDocument();
    expect(getByText(body2)).toBeInTheDocument();
  })
});
