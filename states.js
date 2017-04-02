'use strict';

exports.register = function register(skill) {

    skill.onIntent('LaunchIntent', ()=> ({reply: 'Intent.Hello', to:'optionIntent'}));

    skill.onState('optionIntent', function(event) {
      if (event.intent.name === 'Principal') {
        if (event.intent.params.option === 'places') {
            return {reply:'Intent.optionIntent', to :'placeDescription'}
        }
        else if (event.intent.params.option === 'places') {
            return {reply:'Intent.optionIntent', to :'placeDescription'}
        }
        else if (event.intent.params.option === 'steps') {
            return {reply:'Intent.optionIntent', to :'personsDescription'}
        }
      }
    });

    skill.onState('personsDescription', function(event) {
      if (event.intent.name === 'Person') {
          event.model.personName =  event.intent.params.placename;
          event.model.findPerson();
          return {reply:'Intent.personsDescription'}
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

    skill.onState('searchPersonCargo', function(event) {
      if (event.intent.name === 'Cargo') {

      }
      else if (event.intent.name === 'AMAZON.NoIntent') {
          return {reply:'Intent.personsDescription', to : 'PersonHelp'}
      }
    });
  skill.onIntent('LaunchIntent', () => ({ reply: 'Intent.Hello', to: 'personsIntent' }));

  skill.onState('personsIntent', function (event) {
    if (event.intent.name === 'Principal') {
      return { reply: 'Intent.personsIntent', to: 'personsDescription' }
    }
  });


  skill.onState('placeDescription', function (event) {
    if (event.intent.name === 'Place') {
      event.model.placeLocation =  event.intent.params.placename;
      event.model.find();
      return { reply: 'Intent.placeDescription' }
    }
  });

}
