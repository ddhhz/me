import React from 'react'
import { storiesOf } from '@kadira/storybook'
import LinkedInBadge from '.'

storiesOf('LinkedInBadge', module)
  .add('default', () => (
    <LinkedInBadge>Hello</LinkedInBadge>
  ))
