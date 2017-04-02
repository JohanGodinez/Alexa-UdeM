'use strict';

const Voxa = require('voxa');
const  _ = require('lodash');
const views = require('./views');
const variables = require('./variables');
const states = require('./states');
const placeModel = require('./placeModel');

const skill = new Voxa({ variables, views, model:placeModel });
states.register(skill);
module.exports = skill;
