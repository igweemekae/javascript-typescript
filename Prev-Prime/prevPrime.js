function prevPrime(num) {
  if (num <= 2) {
    return null;
  } else {
    for (let i = num - 1; i > 0; i--) {
      if (isPrime(i)) {
        return i;
      }
    }
  }
}

let isPrime = function (num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
