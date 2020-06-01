import React from 'react';
import { render } from '@testing-library/react';

import Card from './index';

describe('Card component', () => {

  it('should render', () => {
    const subject = render(<Card />)
    expect(subject.container).toMatchSnapshot();
  });

  it('should render with name Spider-Man', () => {
    const subject = render(<Card name="Spider-Man" />);

    expect(subject.getByRole('img')).toHaveProperty('alt' ,'Spider-Man');
    expect(subject.getByRole('heading').innerHTML).toMatch('Spider-Man');
  });

  it('should render default image missing imagePath', () => {
    const subject = render(<Card />);

    expect(subject.getByRole('img')).toHaveProperty('src', 'http://localhost/landscape_not_available.jpg');
  });

  it('should render imagePath', () => {
    const subject = render(<Card imagePath="http://anyimagepath.com/image_path.jpg" />);

    expect(subject.getByRole('img')).toHaveProperty('src', 'http://anyimagepath.com/image_path.jpg');
  });

});