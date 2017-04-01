'use strict';

exports.register = function register(skill) {

    skill.onIntent('LaunchIntent', ()=> ({reply: 'Intent.Hello', to:'optionIntent'}));

    skill.onState('optionIntent', function(event) {
      if (event.intent.name === 'Principal') {
        if (event.intent.params.option === 'persons') {
            return {reply:'Intent.personsIntent', to :'personsDescription'}
        }
        else if (event.intent.params.option === 'places') {
            return {reply:'Intent.placesIntent', to :'personsDescription'}
        }
        else if (event.intent.params.option === 'steps') {
            return {reply:'Intent.stepsIntent', to :'personsDescription'}
        }
      }
    });

    skill.onState('personsDescription', function(event) {
      if (event.intent.name === 'Person') {
        if (event.intent.params.name === 'Felix') {
            return {reply:'Intent.personsDescription'}
        }
      }
      else if (event.intent.name === 'AMAZON.NoIntent') {
          return {reply:'Intent.personsDescription', to : 'searchPersonCargo'}
      }
    });

    skill.onState('searchPersonCargo', function(event) {
      if (event.intent.name === 'Cargo') {

      }
      else if (event.intent.name === 'AMAZON.NoIntent') {
          return {reply:'Intent.personsDescription', to : 'PersonHelp'}
      }
    });
}
