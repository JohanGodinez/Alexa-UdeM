'use strict';

const Voxa = require('voxa');
const views = require('./views');
const variables = require('./variables');
const states = require('./states');
const Model = require('./Model');

const skill = new Voxa({ Model, variables, views });
states.register(skill);
module.exports = skill;
