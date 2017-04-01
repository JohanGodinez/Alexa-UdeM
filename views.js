'use strict';

const views = (function views() {
  return {
    Intent: {
      Hello: {
        tell: 'Welcome!',
      },
      Help: {
        say: 'Some help text here.',
      },
    },
  };
}());

module.exports = views;
