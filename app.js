//make a loop that goes from 1 to 100
function FizzBuzz() {
  for (let num = 1; num < 16; num++) {
    
    if (num % 5 == 0 && num % 3 == 0) {
     
        console.log("FizzBuzz");
    }
    // number divisible by 3 log "Fizz"
    if (num % 3 == 0) {
      console.log("Fizz");
    } else if (num % 5 == 0) {
      console.log("Buzz");
    } else console.log(num);
  }
}
FizzBuzz();
