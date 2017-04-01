'use strict';


exports.register = function register(skill) {
    skill.onIntent('LaunchIntent', ()=> ({reply: 'Intent.Hello', to:'entry'}));
    skill.onIntent('AMAZON.HelpIntent', ()=> ({reply: 'Intent.Help', to:'die'}));
}
