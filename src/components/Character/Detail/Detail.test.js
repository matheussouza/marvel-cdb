import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Detail from './component';

const buildCharacter = (id, description, series) => ({
  id, description, series
});


describe('Character Detail component', () => {
  
  let historyFunctionMock;
  let editFunctionMock;
  beforeEach(() => {
    editFunctionMock = jest.fn();
    historyFunctionMock = jest.fn();
  });
  

  it('should render', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', {});
    const subject = render(<Detail character={ char } />);
    expect(subject.container).toMatchSnapshot();
  });

  it('should contains disabled series button with 0 available', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', { available: 0 });
    const subject = render(<Detail character={ char } />);
    expect(subject.getByTestId('series-btn')).toHaveProperty('disabled', true);
  });

  it('should contains enabled series button', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', {});
    const subject = render(<Detail character={ char } />);
    expect(subject.getByTestId('edit-btn')).toHaveProperty('disabled', false);
  });

  it('should contains default description', () => {
    const char = buildCharacter(1, null, {});
    const subject = render(<Detail character={ char } />);
    expect(subject.getByTestId('description').innerHTML).toMatch('Description unavailable.');
  });

  it('should contains used description', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', {});
    const subject = render(<Detail character={ char } />);
    expect(subject.getByTestId('description').innerHTML).toMatch('Your friendly neighborhood.');
  });

  it('should route to series', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', {});
    const subject = render(<Detail character={ char } history={{ push: historyFunctionMock }} />);
    expect(historyFunctionMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('series-btn'));
    expect(historyFunctionMock).toBeCalledTimes(1);
    expect(historyFunctionMock).toBeCalledWith('/1/series');
  });

  it('should call edit function', () => {
    const char = buildCharacter(1, 'Your friendly neighborhood.', {});
    const subject = render(<Detail character={ char } edit={editFunctionMock} />);
    expect(editFunctionMock).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('edit-btn'));
    expect(editFunctionMock).toBeCalledTimes(1);
  });

});