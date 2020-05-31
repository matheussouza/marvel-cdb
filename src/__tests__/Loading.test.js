import React from 'react';
import { render, screen } from '@testing-library/react'
import Loading from '../components/Loading';

describe('Loading component', () => {

  it('should exist', () => {
    expect(Loading).toMatchSnapshot();
  });

  it('should contain an image', () => {
    render(<Loading />);

    expect(screen.getByRole('img')).toExist();
  });

});