import React from 'react'
import { shallow } from 'enzyme'
import Loading from '..'

describe('Loading', () => {
  test('should render', () => {
    const component = shallow(<Loading />)

    expect(component).toMatchSnapshot()
  })
})
