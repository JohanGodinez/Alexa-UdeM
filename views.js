'use strict';

const views = (function views() {
  return {
    Intent: {
      Hello: {
        ask: 'Welcome to the UdeM. I can help you with the managements, information of the personnel and locations. What do you need?',
      },
      personsIntent: {
        ask: "What is the name of the person?"
      },
      personsDescription: {
        tell: "Feliz is you father"
      },
    },
  };
}());

module.exports = views;
