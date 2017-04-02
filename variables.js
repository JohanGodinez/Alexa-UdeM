'use strict';

module.exports = {
    place: function place(model) {
        return model.placeFound.name;
    },
    location: function location(model){
        return model.placeFound.location;
    }
}

