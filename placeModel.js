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
              this.response = 'If you know the name of the person could you give it to me?';
          break;
        case 'places':
              this.response = 'Where do you want to go?';
          break;
        case 'steps':
              this.response = 'Welcome, I can help you Enrollment , Payments, Active student letter ?';
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

const ProccesSteps = [
  {
    name : 'enrollment',
    descripcion : 'Make sure to bring two photos carnet size, Hight school certify, Birthday certify and $20'
  },
  {
    name : 'payments',
    descripcion : 'Number Enrollment and $20'
  },
  {
    name : 'active student letter',
    descripcion : 'Go to the university registration office, Meet the manager Felix Ramirez'
  }
]
