//defining variable with a Boolean data type
var x = true;

//printing the data type of the Variable x
document.write(typeof x);
document.write("<br>");

// printing expression with combined data types (number and string) 
document.write(5+"7");
document.write("<br>");

//using ==  operator 
document.write(7==7);
document.write("<br>");

//using === operator (for checking the equlity of data and data type)
document.write(7===7);
document.write("<br>");

//using the > and  &&(AND) operators
document.write(7+4>10 && 20-3 >10);
document.write("<br>");

// using < and ||(OR) operators
document.write(65<10 || 43<56);

//using the ! (NOT) operator
function Not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 7);
}