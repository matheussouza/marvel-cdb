import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import NavigationBar from './index';

describe('NavigationBar component', () => {

  let mockChangePage;

  beforeEach(() => {
    mockChangePage = jest.fn();
  });

  it('should be empty component with no arguments', () => {
    const subject = render(<NavigationBar />);
    expect(subject.container.innerHTML).toMatch("");
  });

  it('should be empty component in page 0', () => {
    const subject = render(<NavigationBar page={0} />);
    expect(subject.container.innerHTML).toMatch("");
  });

  it('should be equals snapshot', () => {
    const subject = render(<NavigationBar page={1} total={10} search="" changePage={mockChangePage} />);
    expect(subject.container).toMatchSnapshot();
  });

  it('should have disabled previous button in first page', () => {
    const subject = render(<NavigationBar page={1} />);

    expect(subject.getByTestId('previous-page-button')).toHaveProperty('disabled', true);
  });

  it('should have enabled previous button in second page', () => {
    const subject = render(<NavigationBar page={2} />);

    expect(subject.getByTestId('previous-page-button')).toHaveProperty('disabled', false);
  });

  it('should have disabled next button with total less than page size', () => {
    const subject = render(<NavigationBar page={1} total={10} />);

    expect(subject.getByTestId('next-page-button')).toHaveProperty('disabled', true);
  });

  it('should have disabled next button with total equals page size', () => {
    const subject = render(<NavigationBar page={1} total={10} pageSize={10} />);

    expect(subject.getByTestId('next-page-button')).toHaveProperty('disabled', true);
  });

  it('should have enabled next button when total greater than page size', () => {
    const subject = render(<NavigationBar page={2} total={40} pageSize={10} />);

    expect(subject.getByTestId('next-page-button')).toHaveProperty('disabled', false);
  });

  it('should have disabled next button when in last page', () => {
    const subject = render(<NavigationBar page={2} total={40} />);

    expect(subject.getByTestId('next-page-button')).toHaveProperty('disabled', true);
  });

  it('should call changePage function on click next button', () => {
    const subject = render(<NavigationBar page={2} total={40} pageSize={10} search="spid" changePage={mockChangePage} />);

    expect(subject.getByTestId('next-page-button')).toHaveProperty('disabled', false);
    expect(mockChangePage).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('next-page-button'));
    expect(mockChangePage).toBeCalledTimes(1);
    expect(mockChangePage).toBeCalledWith('spid', 3);
  });

  it('should call changePage function on click previous button', () => {
    const subject = render(<NavigationBar page={2} total={40} pageSize={10} search="spid" changePage={mockChangePage} />);

    expect(subject.getByTestId('previous-page-button')).toHaveProperty('disabled', false);
    expect(mockChangePage).toBeCalledTimes(0);
    fireEvent.click(subject.getByTestId('previous-page-button'));
    expect(mockChangePage).toBeCalledTimes(1);
    expect(mockChangePage).toBeCalledWith('spid', 1);
  });

});