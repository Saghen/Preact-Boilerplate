import { render } from 'preact';
import React from 'preact/compat';

import Router from './router';

render(
  <Router />,
  document.querySelector('#root')
);
