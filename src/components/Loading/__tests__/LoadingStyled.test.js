import React from 'react'
import { mount } from 'enzyme'
import LoadingStyled from '../style'

describe('Loading styled', () => {
  test('should render with width 100%', () => {
    const component = mount(<LoadingStyled />)

    expect(component).toHaveStyleRule('width', '100%')
  })
})

