'use strict';
const _ = require('voxa');

module.exports = {
  place : function place(model){
    return model.placeFound.name;
  },
  location: function location(model){
    return model.placeFound.location;
  },
  description : function description(model){
  		return model.steps.description;
  },
  personName : function personName(model){
  		return model.personFound.name;
  },
  personDescription : function personDescription(model){
  		return model.personFound.description;
  },
  optionChoose: function optionChoose(model){
    return model.response;
  }
}
