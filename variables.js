'use strict';
const _ = require('voxa');

module.exports = {
  place : function place(model){
    return model.placeFound.name;
  },
  location: function location(model){
    return model.placeFound.location;
  },
  Description : function Description(model){
  		return model.ProccesStepsA.descripcion;
  }
}
