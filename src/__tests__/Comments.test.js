import React from 'react';
import { render, screen } from '@testing-library/react';
import Comments from '../components/Comments';

describe('Comments component', () => {
  it('should render the count of comments', () => {
    const props = {
      count: 10,
    };
    const { getByText } = render(<Comments {...props} />);
    expect(getByText('View all 10 comments')).toBeTruthy();
  });

});
