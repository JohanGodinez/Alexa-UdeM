'use strict';

const views = (function views() {
  return {
    Intent: {
      Hello: {
        ask: 'Welcome to the UdeM. I can help you with the managements, information of the personnel and locations. What do you need?',
      },
      optionIntent:{
        ask: "{optionChoose}"
      },
      personDescription: {
        ask: "Feliz is you father"
      },
      placeDescription: {
        tell: "the {place} is in {location}"
      },
      stepsDescription : {
        tell : "Ok {Description}"
      }
    },
  };
}());

module.exports = views;
