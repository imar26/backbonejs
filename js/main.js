var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicles",
    validate: function(attrs) {
        if(!attrs.registrationNumber) {
            return "Registration Number cannot be null or undefined";
        }
    },
    start: function() {
        console.log("Vehicle started.");
    }
});

var Car = Vehicle.extend({
    start: function(registrationNumber) {
        console.log("Car with registration number " + registrationNumber + " started.");
    }
});

var car = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});

car.unset("registrationNumber");

checkIsValid(car);

car.set("registrationNumber", "XLI887");

checkIsValid(car);

function checkIsValid(car) {
    var isValid = car.isValid();

    if(isValid) {
        console.log("Car is validated");
    } else {
        console.log(car.validationError);
    }
}

car.start(car.attributes.registrationNumber);