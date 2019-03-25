import React from 'react';
import { shallow } from 'enzyme';
import Loading from '..';

describe('Loading', () => {
  it('should render', () => {
    const component = shallow(<Loading />);

    expect(component).toMatchSnapshot();
  });
});

