"use strict";
////////////////////////////////
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname)
    this.job = job;
    this.salary = salary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
};
///////////////2.////////////////
Developer.prototype.getSpecialization = function () {
    return this.specialization;
};
//////////////3./////////////////
Manager.prototype.getDepartment = function () {
    return this.department;
};
Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
};
//////////////4./////////////////
Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " has " + this.salary + "$ salary!";
};
Employee.prototype.getSalary = function () {
    return this.salary
};
Employee.prototype.increaseSalary = function () {
    this.salary = this.salary * 1.1;
    return "Increased by 10%"
};
////////////////////////////////
Developer.prototype = Object.create(Employee.prototype);
Manager.prototype = Object.create(Employee.prototype);
// Employee.prototype = Object.create(Person.prototype);
////////////////////////////////
Developer.prototype.constructor = Developer;
Manager.prototype.constructor = Manager;
////////////////////////////////
var employee = new Employee("Uros", "Opacic", "Developer", 1000);
var developer = new Developer("Mitar", "Miric", "Developer", 1500, "JS");
var manager = new Manager("Misko", "Raznatovic", "Manager", 2000, "Sales");
////////////////////////////////
console.log(manager.getSalary())
console.log(manager.increaseSalary());
console.log(manager.getData());
// console.log(Person.prototype);