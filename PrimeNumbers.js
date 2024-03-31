//function to find all prime numbers up to a given number and store them in an array
function findPrimes(upToNum) {
    const primeNums = [2]; // Initialize with 2, as it's the only even prime
  
    for (let i = 3; i <= upToNum; i++) {
      let isPrime = true;
  
      // Check if i is divisible by any prime number found so far
      for (let x = 0; x < primeNums.length; x++) {
        if (i % primeNums[x] === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primeNums.push(i);
      }
    }
  
    return primeNums;
  }
  
  console.log(findPrimes(30));