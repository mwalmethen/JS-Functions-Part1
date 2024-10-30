// Funciton 1 (Printing my name) 
function printName() {
    console.log("Mohammed");
}
printName(); // calling function 


// Function 2 (Prinitng my age)
function printAge(birthYear) {
    Age = 2024 - birthYear // currnet Year - YearOFBirth
    console.log(`I'm ${Age} Years old!`);
}
printAge(2002); // calling function 



// Function 3 (Printing Name and Age)
function printAgeAndName(name, birthYear) {
    age = 2024 - birthYear // used the same expression from the function above rather than typing my age :)
    console.log(`My name is ${name} and I'm ${age} years old!`);
}
printAgeAndName("Mohammed", 2002); // calling function  



// Function 4 (Printing name and language)
function printHello(name, language) {
    if (language === "en") {
        console.log(`Hello ${name}`);
    } else if (language === "es") {
        console.log(`Hola ${name}`);
    } else if (language === "fr") {
        console.log(`Bonjour ${name}`);
    } else if (language === "tr") {
        console.log(`Marhaba ${name}`);
    } 
}
printHello("Mohammed", "en"); 





// Function 5 (Prinitng the bigger number)
function printMax(a, b) {
    if (a > b) {
        console.log(` a = ${a} is bigger number`);
    } else 
    console.log(`b = ${b} is bigger number`);
}
printMax(30, 20); // calling function
