function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const factorial5 = factorial(5);
  
  console.log(factorial5); 
  