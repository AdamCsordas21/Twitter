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
    const author = 'Adam'
    const body = 'Hello Twitter World'
    const tweets: Tweet[] = [{ author, body }]

    const { getByText } = render(<App tweets={tweets} />);
    expect(getByText(author)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  })
});
