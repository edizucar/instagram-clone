import React from 'react';
import { render, screen } from '@testing-library/react';
import Identity from '../components/Identity';
import male_img from '../images/male.png';
import female_img from '../images/female.png';



jest.mock('../images/male.png', () => 'male.png');
jest.mock('../images/female.png', () => 'female.png');

describe('Identity component', () => {
  it('should render the correct age', () => {
    const { getByText } = render(<Identity age={21} />);
    const ageElement = getByText('21');
    expect(ageElement).toBeDefined();
  });

  it('should render the correct gender', () => {
    const { getByText } = render(<Identity gender="Male" />);
    const genderElement = getByText('Male');
    expect(genderElement).toBeDefined();
  });

  it('should render the correct phone number', () => {
    const { getByText } = render(<Identity phone="Samsung" os="Android" />);
    const phoneElement = getByText('Samsung, Android');
    expect(phoneElement).toBeDefined();
  });

  it('should render the correct location', () => {
    const { getByText } = render(<Identity city="Cambridge" state="Cambridgeshire" />);
    const locationElement = getByText('Cambridge, Cambridgeshire');
    expect(locationElement).toBeDefined();
  });
});
