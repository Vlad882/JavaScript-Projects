function while_Loop() {  //A function  using a while loop
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit +="<br>" + X ;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// method returns the number of characters present in the string. 
let X = "This is me";
let Z = X.length;
   console.log(Y);
   

// a function using a for loop   
var Intruments = ["Guitar", "Drums", "Piano", "Bass", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Intruments.length; Y++) {
    Content += Intruments[Y] + "<br>";
    document.getElementById("List_of_Instruments").innerHTML = Content;    
    }
}

//A function with an array
function array_Function() {
    var car_make = [];
    car_make[0] = "KIA";
    car_make[1] = "FORD";
    car_make[2] = "TESLA";
    car_make[3] = "MAZDA";
    document.getElementById("Array").innerHTML = "My favourite car is " + car_make[3] + ".";
}

// using const keyword
function constant_function() {
    const phone = {type: " Mobile ", brand: "Samsung", color: "black"};
    phone.color = " violet ";
    phone.price = " 1000£";
    phone.year = "2024 year";
    document.getElementById("Constant").innerHTML = "The cost of the " + phone.color + phone.brand
     + phone.type + "is" + phone.price +". It is manufactured in " + phone.year;
}

// return statement
var s = myFunction(5,7);
function myFunction(a, b) {
    return a*b
}

// making an object with let keyword
let employee = {
    first_name: "Kate",
    surname: " Midlton",
    department: "marketing",
    salary: "40000p",
    description: function() {
        return this.first_name +  this.surname +" is working in " + this.department + " and got a salary " + this.salary; 
    } 
};
document.getElementById("employee_object").innerHTML = employee.description();

// break loop function
function break_Loop() {
    var Digit = "";
    var X = 10;
    while (X>0) {
        Digit +="<br>" + X ;
        X--;
        if (X == 5)  break;
    }
    document.getElementById("break_L").innerHTML = Digit;
}

// continue loop function
function continue_Loop() {
    var Dig = "";
    var X = 10;
    while (X>0) {
        X--;
        if 
        (X ==5) continue;
        Dig +="<br>" + X ;
    }

   document.getElementById("continue_L").innerHTML = Dig;
}

