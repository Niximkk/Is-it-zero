// first, we do this.
const readline = require('readline');
const open = require('open');
var thatguy = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// then this
number = 69;

// then we call this guy who says his thing
guywhosayshisthing();

function guywhosayshisthing(){
    // clean.
    console.clear();

    // say
    console.log("hello I will tell you if your number is zero or not.\n")
    thatguy.question("Press enter to continue.", function(answer) {

        // now we call this guy
        guywhoasksthenumber();

    });
}

// this is the guy who asks the number
function guywhoasksthenumber(){

// clean.
console.clear()

// ask
thatguy.question("What is your number?\n> ", function(answer) {
    // string to number bla bla bla
    number = parseInt(answer);

    // now we call this other guy
    guywhochecksthenumber();
});
}

// this is the guy who checks the number
function guywhochecksthenumber(){
    if(number == 0){

        // clean again.
        console.clear()

        //you are smart
        console.log("Yay, it is 0!\n")

        //bye
        process.exit(0);
    } else if(number !== 0){

        // clean again.
        console.clear()

        // you are dumb
        console.log("Nah, it is not.\n")

        // teaches you what zero is
        open('https://www.merriam-webster.com/dictionary/zero');
    }
}
