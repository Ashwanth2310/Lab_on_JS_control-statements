// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (var i = 2; i <= 100; i += 2) {
  console.log(i);
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the consolb.
var number = 1;

while (num <= 100) {
  console.log(number);
  num += 2;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var num = 3;
do {
  console.log(number);
  number += 3;
} while (number <= 100);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (var i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

for (var i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
