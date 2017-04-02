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
<<<<<<< HEAD
    findPersonName() {
        const personFound = _.find(persons, { name: this.personName })
        this.personFound = personFound;
    }
    findPersonPosition() {
        const personFoundPosition = _.find(persons, { name: this.personPosition })
        this.personFoundPosition = personFoundPosition;
    }
=======
    findSteps(){
        const ProccesStepsA = _.find(ProccesSteps, {name : this.locationProccess})
        this.ProccesStepsA = ProccesStepsA;
    }

>>>>>>> 84d67c572a2e7e091a15823792bf66f8e47f7eb1
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
    name : 'Matricula',
    descripcion : 'Ok Okey Process Matricula'
  },
  {
    name : 'Pagos',
    descripcion : 'Okey Okey Process for money'
  },
  {
    name : 'Carta Alumno Activo',
    descripcion : 'Okey Process for Student Active'
  }
]
