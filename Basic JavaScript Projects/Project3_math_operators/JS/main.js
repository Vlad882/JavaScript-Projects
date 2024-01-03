// a funtion that uses += operator
function Subtraction() {  //Defining and naming the substraction function
    var Sub = 10-3;
    document.getElementById("Sub").innerHTML = "10-3= " +Sub; //Displaying result
}

function Addition() {  //Defining and naming the addition function
    var Add = 3+5;
    document.getElementById("Add").innerHTML = "3+5= " +Add;  //Displaying result
}

function Multiplication() { //Defining and naming the Multiplication function
    var Mult = 2*6;
    document.getElementById("Mult").innerHTML = "2*6= " +Mult;    //Displaying result
}

function Modulus() {  //Defining and naming the modulus operator function
    var Mod = 30%4;
    document.getElementById("Mod").innerHTML = "30 divided by 4 have a remainder (Modulus) " +Mod;  //Displaying result
}

function Increment() { //Defining and naming the increment function
    var value =document.getElementById("IncrementText").innerHTML; // making the text of the HTML element to variable
    ++value;  //add 1 to variable
    document.getElementById("IncrementText").innerHTML = value; //Displaying result
}

function Decrement() {  //Defining and naming the decrement function
    var value =document.getElementById("DecrementText").innerHTML;  // making the text of the HTML element to variable
    --value;  // subtract 1 from variable
    document.getElementById("DecrementText").innerHTML = value;
}

function Random() {   //Defining and naming the random function
    document.getElementById("Rand").innerHTML = Math.random()*10;  //Displaying result
}