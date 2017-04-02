'use strict';

const _ = require('lodash');

class Model {
    constructor(data) {
        _.assign(this, data);
    }

    static fromEvent(alexaEvent) {
        console.log("asdf");
        return new this(alexaEvent.session.attributes.modelData);
    }
    serialize() {
        return this;
    }
    find() {
        const placeFound = _.find(places, { name: this.placeLocation })
        this.placeFound = placeFound;
    }
    findPersonName() {
        const personFound = _.find(persons, { name: this.personName })
        this.personFound = personFound;
    }
    findPersonPosition() {
        const personFoundPosition = _.find(persons, { name: this.personPosition })
        this.personFoundPosition = personFoundPosition;
    }
    static get PLACES(){
        return places;
    }
}

module.exports = Model;

const persons = [
  {
    name : "Felix Ramirez",
    position: "Programer",
    description : "A professor at the UDEM, and programmer on the development of systems by the university."
  },
  {
    name : "Fernando Valle",
    position: "Programer",
    description : "Deputy director of the university of managua"
  }
]

const places = [
    {
        name: 'laboratory 1',
        location: 'first floor, engineering building'
    },
    {
        name: 'laboratory 10',
        location: 'second floor, engineering building'
    },
    {
        name: 'laboratory 13',
        location: 'Behind registration office'
    },
    {
        name: 'Registration office',
        location: 'In front of the gym'
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
