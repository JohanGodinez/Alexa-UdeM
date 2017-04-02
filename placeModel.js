'use strict';
const _ = require('lodash');

class placeModel {
    constructor(data) {
        _.assign(this, data);
    }

    static fromEvent(alexaEvent) {
        return new this(alexaEvent.session.attributes.modelData);
    }
    serialize() {
        return this;
    }
    find() {
        const placeFound = _.find(places, { name: this.placeLocation })
        this.placeFound = placeFound;
    }
    static get PLACES(){
        return places;
    }
}

module.exports = placeModel;

const places = [
    {
        name: 'Laboratory one',
        location: 'first floor, engineering building'
    },
    {
        name: 'Laboratory ten',
        location: 'second floor, engineering building'
    },
    {
        name: 'Laboratory thirteen',
        location: 'Behind registration office'
    },
    {
        name: 'Registration office',
        location: 'In front of the gym'
    },
    {
        name: 'Laboratory thirteen',
        location: 'Behind registration office'
    },
    {
        name: 'Classroom one',
        location: 'Principal building, first floor, first Classroom'
    },
    {
        name: 'Hotel',
        location: 'Principal building, two block to east'
    },
    {
        name: 'Protocol room',
        location: 'engineering building, second floor'
    },
    {
        name: 'Technical support office',
        location: 'Principal building, second floor'
    },
    {
        name: 'Rector office',
        location: 'Inside of registration office'
    },

];
