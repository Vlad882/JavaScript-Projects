
//A function for using ternary operation with input from the user in browser
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You are not old enough to vote":"You can vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//A constructor function using "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Erik = new Vehicle("Dodge", "Viper", 2022, "Red");
var John = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Iva = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//A funtion to display results of the constructor in browser
function Constructor() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a "+ Erik.Vehicle_Color + " - colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// Nested function
function Strings() {
    var start = "Hi";

    function Adding(str) {
        start = start + " " + str;
    }
    Adding("all");
    document.getElementById("Nested_F").innerHTML = start;
}


