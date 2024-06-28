  'use strict'

  
  const isPrime = (num) => {
    if (num > 1) {
      for (let x = 2; x < num; x++) {
        if (num % x === 0) {
         return false;
        } 
      }
         return true;
       } else {
          return false;
         } 
       } 

 
  const primeNumber = isPrime(101)
  console.log('Простое число:' , primeNumber);