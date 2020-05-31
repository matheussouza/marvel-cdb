import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from './index';

describe('Loading component', () => {

  it('should render', () => {
    const subject = render(<Loading />);
    expect(subject).toMatchSnapshot();
  })

});