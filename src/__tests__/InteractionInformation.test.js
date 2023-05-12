import React from 'react';
import { render, screen } from '@testing-library/react';
import InteractionInformation from '../components/InteractionInformation';
import AccountProfile from '../components/AccountProfile';

jest.mock('../css/InteractionInformation.css', () => 'InteractionInformation.css');

describe('InteractionInformation component', () => {

  it('should render the correct link text', () => {
    const { getByText } = render(<InteractionInformation account_src="test1" account_dest="test2" profile_picture_src="test3" profile_picture_dest="test4"/>);
    const linkText = getByText('Instagram knows your child has interacted with similar accounts');
    expect(linkText).not.toBeNull();
  });
});
