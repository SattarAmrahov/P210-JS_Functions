function showMessage() {
    alert("Helloo");
    console.log("World");
}

let name = "Ayaz";
function welcomeMessage(surname, name = "Elnur"){
    //console.log(name);
    let newMessage = "Hello " + name + " " + surname;
    return newMessage
}

// let ad = prompt("Please, enter your name: ");
// let soyad = prompt("Please, enter your surname");
// let message = welcomeMessage(soyad, ad);
// alert(message);
// console.log( message );

// console.log(name);
// welcomeMessage();
// console.log(name);


// showMessage();


function sum(a, b=100, c=200){
    return a + b + c;
}

//let result = sum(5,10);
//console.log(sum(5, 20));


