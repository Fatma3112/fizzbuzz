let outPut = [];
let count = 1;
function fizzbuzz() {
    while(count <=100) {
    if (count % 3 ===0 && count % 5 ===0) {
        outPut.push("fizzbuzz");
    }else if (count % 3 ===0) {
        outPut.push("fizz");
    }else if (count % 5 ===0) {
        outPut.push("buzz");
    }else{
    outPut.push(count);
}
    count++;
}
  console.log(outPut);

}
fizzbuzz();


let names = ["fatma", "maher", "adam"];
function people(names) {
    let numberOfPeople = names.length;
    let randomePersone = Math.floor(Math.random() * numberOfPeople);
    let randome = names[randomePersone];
   return randome + " is going to buy lunch today!";
}




function fubino(n) {
    var output = [];
    if (n === 1 ) {
        output = [0];
    }
    else if ( n === 2) {
        output = [0,1];
    }else {
        output = [0, 1];
        for(var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output =  fubino(6);
console.log(output);
