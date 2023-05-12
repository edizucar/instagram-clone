import React from 'react';
import { render, screen } from '@testing-library/react';
import InteractionArea from '../components/InteractionArea';
import like from '../images/notifications-icon.png';
import comment from '../images/comments-icon.png';
import send from '../images/messages-icon.png';
import save from '../images/save-icon.png';
import RevealButton from '../components/RevealButton';
import { fireEvent } from '@testing-library/dom';


jest.mock('../images/notifications-icon.png', () => 'notifications-icon.png');
jest.mock('../images/comments-icon.png', () => 'comments-icon.png');
jest.mock('../images/messages-icon.png', () => 'messages-icon.png');
jest.mock('../images/save-icon.png', () => 'save-icon.png');

describe('InteractionArea component', () => {
  it('should render the correct images', () => {
    const { getByAltText } = render(<InteractionArea isRevealed={false} func={() => {}} toolTipText="Some text"/>);

    const commentElement = getByAltText('comment');
    expect(commentElement).not.toBeNull();
    const sendElement = getByAltText('send');
    expect(sendElement).not.toBeNull();
    const saveElement = getByAltText('save');
    expect(saveElement).not.toBeNull();
  });

  it('should call the function when the RevealButton is clicked', () => {
    const func = jest.fn();
    const { getByAltText } = render(<InteractionArea isRevealed={false} func={func} toolTipText="Some text"/>);
    const revealButtonElement = getByAltText('eye');
    expect(revealButtonElement).not.toBeNull();
    revealButtonElement.click();
    expect(func).toHaveBeenCalled();
  });

  it('should render the correct tooltip text when the mouse hovers over the RevealButton', () => {
    const { getByAltText } = render(<InteractionArea isRevealed={false} func={() => {}} toolTipText="Some text"/>);

    const revealButtonElement = getByAltText('eye');
    fireEvent.mouseOver(revealButtonElement);
    
    expect(screen.queryByText('Some text')).toBeTruthy();
  });
});