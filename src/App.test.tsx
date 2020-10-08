import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('main page', () => {
  it('should render main section', () => {
    const { getByTestId } = render(<App />);
    const mainElement = getByTestId('main-section');
    expect(mainElement).toBeInTheDocument();
  });

  it('should render tweet text', () => {
    const { getByText } = render(<App />);
    const tweet = getByText('Hello Twitter World');
    expect(tweet).toBeInTheDocument();
  })

  it('should render tweet author name', () => {
    const { getByText } = render(<App />);
    const tweet = getByText('Adam');
    expect(tweet).toBeInTheDocument();
  })
});
