import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from './component';

describe('Header component', () => {
  let mockFunction;
  beforeEach(() => {
    mockFunction = jest.fn();
  })

  it('should render', () => {
    const subject = render(<Header />);
    expect(subject).toMatchSnapshot();
  });

  it('should call loadCharactersRequest on button click', () => {
    const subject = render(<Header loadCharactersRequest={mockFunction} />);
    
    expect(mockFunction).toBeCalledTimes(0);

    fireEvent.click(subject.getByRole('button'));
    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction).toBeCalledWith('', 1);
  });

  it ('should call action with input component value', () => {
    const subject = render(<Header loadCharactersRequest={mockFunction} />);
    
    expect(mockFunction).toBeCalledTimes(0);
    fireEvent.change(subject.getByRole('textbox'), { target: { value: '123' } });
    fireEvent.click(subject.getByRole('button'));
    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction).toBeCalledWith('123', 1);
  });

});