'use strict';

const _ = require('lodash');

class Model {
    constructor(data) {
        _.assign(this, data);
    }

    static fromEvent(alexaEvent) {
        return new this(alexaEvent.session.attributes.modelData);
    }
    serialize() {
        return this;
    }
    general(){
      let response;
      switch (this.optionChoose) {
        case 'persons':
              this.response = 'could you give me the person name?';
          break;
        case 'places':
              this.response = 'what place do you want to go?';
          break;
        case 'steps':
              this.response = 'what steps do you nedd to know?';
          break;
      this.response = response;
      }
    }

    find() {
        const placeFound = _.find(places, { name: this.placeLocation })
        this.placeFound = placeFound;
    }
    findPerson() {
        const personFound = _.find(persons, { name: this.personName })
        this.personFound = personFound;
    }
    findSteps(){
        const steps = _.find(ProccesSteps, {name : this.locationProccess})
        this.steps = steps;
    }

    static get PLACES(){
        return places;
    }
}

module.exports = Model;

const persons = [
  {
    name : "Felix Ramirez",
    position: "developer",
    description : "a teacher and software developer at U D M"
  },
  {
    name : "Felix",
    position: "developer",
    description : "a teacher and software developer at U D M"
  },
  {
    name : "Fernando Valle",
    position: "vice principal",
    description : "vice principal of university of managua"
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

const ProccesSteps = [
  {
    name : 'enrollment',
    description : 'Make sure to bring two photos carnet size, Hight school certify, Birthday certify and $20'
  },
  {
    name : 'payments',
    description : 'Student id, and the amount to pay'
  },
  {
    name : 'active student letter',
    description : 'Go to the university registration office and meet with the manager Felix Ramirez'
  },
]
