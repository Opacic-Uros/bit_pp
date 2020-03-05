'use strict';
/////////
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.getData = function () {
        return 'Name of the person: ' + this.name + '\nLast name of the person: ' + this.lastName;
    }
}

/////////

function Seat(number, category) {
    if (typeof number === 'number' && number !== undefined) {
        this.number = number;
    } else {
        this.number = Math.floor(10 + 90 * Math.random());
    }
    if (category !== undefined) {
        this.category = category;
    } else {
        this.category = 'e';
    }
    this.number = number;
    this.category = category;
    this.getData = function () {
        return 'Seat number: ' + this.number + '\nSeat category: ' + this.category;
    }
}

/////////

function Passenger(person, seat) {
    this.personInfo = person;
    this.seatInfo = seat;
    this.getData = function () {

        return 'Person info: ' + this.personInfo.getData() + '\nSeat info: ' + this.seatInfo.getData();
    }
}

///////

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];

    this.addPassenger = function (passenger) {
        this.listOfPassengers.push(passenger)
    }
    this.getData = function () {
        var stringFlight = '';
        for (var i = 0; i < listOfPassengers.length; i++) {
            stringFlight += this.listOfPassengers[i].getData()
        }
        return this.relation + '\n' + this.date.getDate() + '\n' + stringFlight;
    }
}

/////////

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
        this.listOfFlights.push(flight)
    }
    this.getData = function () {
        var flightsData = "";
        for (var i = 0; i < listOfFlights; i++) {
            flightsData += this.flights[i].getData();
        }
        return 'Airport' + this.name + flightsData;
    }
}

var passenger = new Passenger(personInfo, seatInfo)
var personInfo = new Person('Uros', 'Opacic');
var seatInfo = new Seat('1', 'a');
var flightInfo = new Flight("Belgrade-New York", "Oct 25 2017")