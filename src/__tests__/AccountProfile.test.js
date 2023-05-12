import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountProfile from '../components/AccountProfile';

describe('AccountProfile component', () => {
  it('should render the account name and image', () => {
    const props = {
      name: 'John Doe',
      image: 'https://example.com/profile_picture.png',
    };
    const { getByText, getByAltText } = render(<AccountProfile {...props} />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByAltText('profile')).toBeTruthy();
  });
});
