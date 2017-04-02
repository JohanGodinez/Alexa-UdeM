'use strict';

const views = (function views() {
  return {
    Intent: {
      Hello: {
        ask: 'Welcome to the U D M assistant. I can help you if you do not know places, persons or steps for some process. What do you need to know about?',
      },
      optionIntent:{
        ask: "{optionChoose}"
      },
      personDescription: {
        ask: "{name} is {description}"
      },
      placeDescription: {
        tell: "the {place} is in {location}"
      },
      stepsDescription : {
        tell : "the steps are {description}"
      }
    },
  };
}());

module.exports = views;
