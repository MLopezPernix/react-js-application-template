import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePage from '../../../src/components/pages/HomePage';

storiesOf('HomePage', module)
  .add('default', () => <HomePage />)
