alert('Please be Welcome! This is the Secret Number game!');

let maximumValue = 2
let minimumValue =  1
let secretNumber = parseInt(Math.random()*maximumValue + minimumValue );
console.log ('The secret number is ' + secretNumber);

let tentative;
let tries = 1

while (tentative != secretNumber){
    tentative = prompt (`Chose one number between ${minimumValue} to ${maximumValue}`);
        // if tentative was equal secertNumber
    if (tentative == secretNumber) {
        break;
    } else {
        alert ('Hm... you are wrong! Try again. You number was ' + tentative )
        if (tentative > secretNumber) {
            alert ('Its lower!');
        } else 
        alert ('Its higer!')
    } 
    tries++; //or tries = tries + 1
    }

    let wordTries = tries > 1 ? 'tries' : 'trie';
    alert (`Yeah! You did it, congrats! The numer was ${secretNumber}, and you did it with ${tries} ${wordTries}!`);

    ///if (tries > 1) {
       /// alert (`Yeah! You did it, congrats! The numer was ${secretNumber}, and you did it with ${tries} tries!`);
    ///} else {
       /// alert (`Yeah! You did it, congrats! The numer was ${secretNumber}, and you did it with ${tries} trie!`);
    ///}