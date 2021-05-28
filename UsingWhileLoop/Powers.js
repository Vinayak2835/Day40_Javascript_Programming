const readline6 = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
});
let powers1 = 1;readline6.question("Enter a number", (number) => {
    let result = 1;
      while(result < 128) {
           result = result * number;
           console.log(result);
      }
      readline6.close();
  });
