function factorial(n) {
    // console.log(n);
    // console.log(typeof(n));
    // console.log(Number(n));
    // console.log(NaN == NaN);
    // console.log(typeof(Number(n)));
    // console.log(typeof(NaN) == "number");

   

    if (n < 0) {
        return "Input is negative. Enter Positive number";
    } 

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;

    //console.log(result);
}

let input = prompt("Enter positive number");
let response = factorial(input);
console.log(response);
document.write(response);
// alert(response);
