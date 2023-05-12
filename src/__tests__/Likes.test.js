import React from 'react';
import { render, screen } from '@testing-library/react';
import Likes from '../components/Likes';

describe('Likes component', () => {
  it('should render the correct number of likes', () => {
    const props = {
      count: 10,
    };
    const { getByText } = render(<Likes {...props} />);
    expect(getByText('10 likes')).toBeTruthy();
  });

  it('should render the correct text when there are no likes', () => {
    const props = {
      count: 0,
    };
    const { getByText } = render(<Likes {...props} />);
    expect(getByText('0 likes')).toBeTruthy();
  });
});