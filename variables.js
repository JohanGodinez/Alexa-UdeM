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
  optionChoose: function optionChoose(model){
    return model.response;
  }
}
