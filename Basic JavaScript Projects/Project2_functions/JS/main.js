// a funtion that uses += operator

function myFunction() {     
    var sentence = "I am learning";   // creating a variable
    sentence += " my JavaScript course!";  //using +=operator to add variabe
    document.getElementById("Concatenate").innerHTML=sentence;   //using document.getElementById() method

    }


    let x = myFunction(4, 3);

    function myFunction(a, b) {
      return a * b;
    }