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
        ask : "{personName} is {personDescription}. Do you need anything else?"
      },
      placeDescription: {
        ask : "the {place} is in {location}. Do you need anything else?"
      },
      stepsDescription : {
        ask : "the steps are {description}. Do you need anything else?"
      },
      returnIntent : {
        ask : ""
      },
      endIntent : {
        tell : "Bye"
      }
    },
  };
}());

module.exports = views;
