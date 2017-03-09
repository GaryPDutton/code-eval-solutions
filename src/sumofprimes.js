/**
 * Returns true if the number passed in is a prime number
 * @param  {number}  n [description]
 * @return {Boolean}   [description]
 */
function isPrime(n) {
    for (var c = 2; c <= Math.sqrt(n); ++c)
        if (n % c === 0) return false;
    return n > 1;
}


/**
 * finds sums the first n prime numbers
 * @param  {number} n maximum number to sum to
 * @return {number}   sum of primes
 */
function sumPrimes(n) {
    var sum = 0;
    var primeCount = 0;
    var i = 2;
    while (primeCount < n) {
        if (isPrime(i)) {
            sum += i;
            primeCount += 1;
        }
        i += 1;
    }
    return sum;
}

//Sum of the first 1000 primes
process.stdout.write('' + sumPrimes(1000));
