'use strict';

const views = (function views() {
  return {
    Intent: {
      Hello: {
        ask: 'Welcome to the UdeM. I can help you with the managements, information of the personnel and locations. What do you need?',
      },
      optionIntent:{
        ask: "places"
      },
      personIntent: {
        ask: "If you know the name of the person could you give it to me?"
      },
      searchPersonName: {
        ask: "Feliz is you father"
      },
      searchPersonCargo: {
        tell: "Feliz is you father"
      },
      placeIntent: {
        ask: "Where do you want to go?"
      },
       placeDescription: {
        tell: "the {place} is in {location}"
      },
    },
  };
}());

module.exports = views;
