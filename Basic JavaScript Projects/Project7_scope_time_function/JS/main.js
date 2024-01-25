
// assigning local and global variables
var x = 5;  //Global veriable

function Add_numbers1() {
    var x = 99;  // Local variable
    document.write(5 + x + "<br>");  // using local variable
}

function Add_numbers2() {
    document.write(x + 7);  // using global variable
    console.log(x);  // using console.log to debug wich variable is being used
}

Add_numbers1();
Add_numbers2();

// A function that includes an if statement
function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Hi").innerHTML = "It is before 6pm now";

    }
}

// A function with if and else statements
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 === 0) {
        reply = "You entered an even number!";
        document.getElementById("feedback").innerHTML = reply; 
}
    else {
        reply = "You entered an odd number!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

// Utilizing the time function() from previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time >0 ) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
            Reply = "It is afternoon!";
    } 
    else {
        Reply = "It is evening time!"
    } 
    document.getElementById("Time").innerHTML = Reply;
    }
