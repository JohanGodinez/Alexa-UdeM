'use strict';


exports.register = function register(skill) {

  skill.onIntent('LaunchIntent', () => ({ reply: 'Intent.Hello', to: 'personsIntent' }));

  skill.onState('personsIntent', function (event) {
    if (event.intent.name === 'Principal') {
      return { reply: 'Intent.personsIntent', to: 'personsDescription' }
    }
  });

  skill.onState('placeDescription', function (event) {
    if (event.intent.name === 'Place') {
      event.model.placeLocation = "Laboratory one";
      event.model.find();
      return { reply: 'Intent.placeDescription' }
    }
  });
}
