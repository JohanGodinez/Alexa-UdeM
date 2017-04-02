'use strict';

exports.register = function register(skill) {

    skill.onIntent('LaunchIntent', ()=> ({reply: 'Intent.Hello', to:'optionIntent'}));

    skill.onState('optionIntent', function(event) {
      if (event.intent.name === 'Principal') {
        event.model.optionChoose = event.intent.params.option;
        event.model.general();
        if (event.intent.params.option === 'persons') {
            return {reply:'Intent.optionIntent', to :'personDescription'}
        }
        if (event.intent.params.option === 'places') {
            return {reply:'Intent.optionIntent', to :'placeDescription'}
        }
        if (event.intent.params.option === 'steps') {
            return {reply:'Intent.optionIntent', to :'stepsDescription'}
        }
        return {reply:'Intent.optionIntent', to :'Hello'}
      }
    });

    skill.onState('personDescription', function(event) {
      if (event.intent.name === 'Person') {
          event.model.personName =  event.intent.params.personname;
          event.model.findPerson();
          return {reply : 'Intent.personDescription', to: 'returnIntent'}
      }
      if (event.intent.name === 'AMAZON.NoIntent') {
        return {reply : 'Intent.Hello', to: 'entry' }
      }
    });

  skill.onState('placeDescription', function (event) {
    if (event.intent.name === 'Place') {
      event.model.placeLocation =  event.intent.params.placename;
      event.model.find();
      return {reply : 'Intent.placeDescription', to: 'returnIntent'}
    }
    if (event.intent.name === 'AMAZON.NoIntent') {
      return {reply : 'Intent.Hello', to: 'entry' }
    }
  });

  skill.onState('stepsDescription', function(event){
      if (event.intent.name === 'Step') {
         event.model.locationProccess = event.intent.params.stepname;
         event.model.findSteps();
         return {reply : 'Intent.stepsDescription', to: 'returnIntent'}
      }
      if (event.intent.name === 'AMAZON.NoIntent') {
        return {reply : 'Intent.Hello', to: 'entry' }
      }
  });

  skill.onState('returnIntent', function(event){
    if (event.intent.name === 'AMAZON.YesIntent') {
      return {reply : 'Intent.Hello', to: 'entry'}
    }
    if (event.intent.name === 'AMAZON.NoIntent') {
      return {reply : 'Intent.endIntent' }
    }
  });

  skill.onState('endIntent', function(event){
       return {reply : 'Intent.endIntent'}
  });

}
