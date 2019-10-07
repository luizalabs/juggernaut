import React from 'react'
import { mount } from 'enzyme'
import LoadingStyled from '../style'

describe('Loading styled', () => {
  it('should render with color', () => {
    const component = mount(<LoadingStyled />)

    expect(component).toHaveStyleRule('color', '#777')
  })
})

