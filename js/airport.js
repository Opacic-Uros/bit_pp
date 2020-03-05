'use strict';
/////////
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
        return 'Name of the person: ' + this.name + '\nSurname of the person: ' + this.surname;
    }
}
var personInfo = new Person('Uros', 'Opacic');

/////////

function Seat(number, category) {
    this.number = number;
    this.category = category;
    this.getData = function () {
        return 'Seat number: ' + this.number + '\nSeat category: ' + this.category;
    }
}
var seatInfo = new Seat(001, 'a');

/////////

function Passenger() {

}

var passengerInfo = new Passenger();

/////////

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
}

/////////

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];

}