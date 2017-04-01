'use strict';


exports.register = function register(skill) {

    skill.onIntent('LaunchIntent', ()=> ({reply: 'Intent.Hello', to:'personsIntent'}));

    skill.onState('personsIntent', function(event) {
      if (event.intent.name === 'Principal') {
          return {reply:'Intent.personsIntent', to :'personsDescription'}
      }
    });

    skill.onState('personsDescription', function(event) {
      if (event.intent.name === 'Person') {
        if (event.intent.params.name === 'Felix') {
            return {reply:'Intent.personsDescription'}
        }
      }
    });
}
