import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountBar from '../components/AccountBar';
import RevealButton from '../components/RevealButton';

describe('AccountBar component', () => {
  it('should render the account name and profile picture', () => {
    const props = {
      profile_picture: 'https://example.com/profile_picture.png',
      account_name: 'John Doe',
      isRevealed: false,
      toolTipText: 'This is a tooltip',
      func: () => {},
    };
    const { getByText, getByAltText } = render(<AccountBar {...props} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByAltText('profile of account')).toBeTruthy();
  });

  it('should render the RevealButton when isRevealed is true', () => {
    const props = {
      profile_picture: 'https://example.com/profile_picture.png',
      account_name: 'John Doe',
      isRevealed: true,
      toolTipText: 'This is a tooltip',
      func: () => {},
    };
    const { getByText, getByAltText, getByRole } = render(<AccountBar {...props} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByAltText('profile of account')).toBeTruthy();
  });
});
