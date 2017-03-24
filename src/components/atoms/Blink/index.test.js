import React from 'react'
import { shallow } from 'enzyme'
import Blink from '.'

const wrap = (props = {}) => shallow(<Blink {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})
