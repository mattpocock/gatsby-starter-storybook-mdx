import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

addDecorator((storyFn) => (
  <div
    style={{
      padding: '1.5rem',
      minHeight: '100vh',
    }}
  >
    {storyFn()}
  </div>
));

function loadStories() {
  /**
   * Loads everything in ../app/components with
   * suffix .stories.js
   */
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
