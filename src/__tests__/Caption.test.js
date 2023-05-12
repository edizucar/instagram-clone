import React from 'react';
import { render, screen } from '@testing-library/react';
import Caption from '../components/Caption';

describe('Caption component', () => {
    let long_caption = 'This is a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long caption that is longer than 200 characters.';

  it('should render the account name and text', () => {
    const props = {
      account_name: 'John Doe',
      text: long_caption,
    };
    const { getByText, queryByText} = render(<Caption {...props} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(queryByText(long_caption)).toBeFalsy();
  });

  it('should not render the "more" text if the caption is less than 200 characters', () => {
    const props = {
      account_name: 'John Doe',
      text: 'This is a short caption.',
    };
    const { getByText } = render(<Caption {...props} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('This is a short caption.')).toBeTruthy();
  });
});
