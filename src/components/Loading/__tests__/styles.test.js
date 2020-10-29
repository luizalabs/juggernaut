import React from 'react'
import { mount } from 'enzyme'
import { Container } from '../styles'

describe('Test loading component styles', () => {
  test('should render container with width 100%', () => {
    const component = mount(<Container />)

    expect(component).toHaveStyleRule('width', '100%')
  })
})

