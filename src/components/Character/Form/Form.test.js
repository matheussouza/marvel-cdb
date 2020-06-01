import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Form from './index'

describe('Character Form component', () => {

  let backMock;
  let updateMock;

  beforeEach(() => {
    backMock = jest.fn();
    updateMock = jest.fn();
    global.confirm = jest.fn();
  });

  it('should exist', () => {
    const subject = render(<Form character={{}} />);
    expect(subject.container).toMatchSnapshot();
  });

  it('should set input with name', () => {
    const subject = render(<Form character={{ name: 'Spider-Man' }} />);
    expect(subject.getByTestId('name-input')).toHaveProperty('value', 'Spider-Man');
  });

  it('should set input with description', () => {
    const subject = render(<Form character={{ description: 'An optional description' }} />);
    expect(subject.getByTestId('description-input')).toHaveProperty('value', 'An optional description');
  });
  
  it('should have default description', () => {
    const subject = render(<Form character={{}} />);
    expect(subject.getByTestId('description-input')).toHaveProperty('value', 'Description unavailable.');
  });

  it('should update on click (computer)', () => {
    const subject = render(<Form character={{ name: 'Spider-Man', description: 'My Description.' }} update={ updateMock } back={ backMock } />);
    
    expect(backMock).toBeCalledTimes(0);
    expect(updateMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('save-computer'));
    expect(backMock).toBeCalledTimes(1);
    expect(updateMock).toBeCalledTimes(1);
    expect(updateMock).toBeCalledWith('Spider-Man', 'My Description.');
  });

  it('should update on click (mobile)', () => {
    const subject = render(<Form character={{ name: 'Spider-Man', description: 'My Description.' }} update={ updateMock } back={ backMock } />);
    
    expect(backMock).toBeCalledTimes(0);
    expect(updateMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('save-mobile'));
    expect(backMock).toBeCalledTimes(1);
    expect(updateMock).toBeCalledTimes(1);
    expect(updateMock).toBeCalledWith('Spider-Man', 'My Description.');
  });

  it('should cancel on click (computer)', () => {
    const subject = render(<Form character={{}} back={ backMock } />);
    global.confirm = jest.fn(() => true);
    
    expect(global.confirm).toBeCalledTimes(0);
    expect(backMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('cancel-computer'));
    expect(global.confirm).toBeCalledTimes(1);
    expect(backMock).toBeCalledTimes(1);
  });

  it('should cancel on click (mobile)', () => {
    const subject = render(<Form character={{}} back={ backMock } />);
    global.confirm = jest.fn(() => true);
    
    expect(global.confirm).toBeCalledTimes(0);
    expect(backMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('cancel-mobile'));
    expect(global.confirm).toBeCalledTimes(1);
    expect(backMock).toBeCalledTimes(1);
  });

  it('should\'t cancel on click (computer) - select not', () => {
    const subject = render(<Form character={{}} back={ backMock } />);
    global.confirm = jest.fn(() => false);
    
    expect(global.confirm).toBeCalledTimes(0);
    expect(backMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('cancel-computer'));
    expect(global.confirm).toBeCalledTimes(1);
    expect(backMock).toBeCalledTimes(0);
  });

  it('should\'t cancel on click (mobile) - select not', () => {
    const subject = render(<Form character={{}} back={ backMock } />);
    global.confirm = jest.fn(() => false);
    
    expect(global.confirm).toBeCalledTimes(0);
    expect(backMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('cancel-mobile'));
    expect(global.confirm).toBeCalledTimes(1);
    expect(backMock).toBeCalledTimes(0);
  });

});