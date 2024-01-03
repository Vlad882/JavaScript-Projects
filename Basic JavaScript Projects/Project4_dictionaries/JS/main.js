function my_Dictionary() {  // defining  Dictionary
    var Vehicle = {
        Manufacturer:"KIA",
        Model:"Optima",
        colour:"Grey",
        Year: 2016,
        Price:10000
        
    };
    delete Vehicle.Price;  //deleting one KVP from Dictionary 
    document.getElementById("Dictionary").innerHTML = Vehicle.Price;
}