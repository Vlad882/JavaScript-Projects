//Utilizing concat method
function concat_method() {
    var part1 = "This ";
    var part2 = "is ";
    var part3 = "my assignment ";
    var full_sentence = part1.concat(part2,part3);
        document.getElementById("full_s").innerHTML= full_sentence;
}

//Utilizing slice method
function slice_method() {
    var full_sentence = "This is my example";
    var part_sentence = full_sentence.slice(5,7);
    document.getElementById("slice_m").innerHTML = part_sentence;
}

//Utilizing string method
function string_method() {
    var number = 543;
    document.getElementById("str").innerHTML = number.toString();
}

//Utilising toPrecision method
function toPrecision_method() {
    var num = 3455.453458;
    document.getElementById("prc").innerHTML = num.toPrecision(4)
}
