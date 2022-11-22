/*
Instruction
Implement an alarm clock / timer which will beep after a specified amount of time has passed.The user can specify an unlimited number of alarms using command line arguments;

EXAMPLE USAGE:
node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

EDGE CASES
With every software project, developers need to think about edge cases.
Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:
1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/
//set up process.argv.slice(2); for CLI input
//make timer1 function
//if input is not NaN and input is bigger than 0 ...
//use forEach to loop over num array
//forEach element ))beep(( when element * 1000ms

const timer1 = function(numbers) {


  numbers.forEach(arg => {

    const timer = Number(arg);

    if (isNaN(timer) || timer <= 0) {
      return;
    }

    console.log('Setting timer:', timer);
    setTimeout(() => {
      process.stdout.write(`Alarm ${timer} \x07 \n`)
    }, timer * 1000);

  });

};

let args = process.argv.slice(2);
timer1(args);


