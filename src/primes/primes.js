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
 * Returns true if the value passed in is a palendrome
 * @param  {mixed}  n [description]
 * @return {Boolean}   [description]
 */
function isPalindrome(n) {
    var str = '' + n;
    return str === str.split('').reverse().join('');
}

/**
 * finds the highest number below the argument that is a Prime Number and a Palindrome
 * @param  {number} n maximum number to search to
 * @return {number}   highest prime palindrome
 */
function findHighestPrimePalindrome(n) {
    var returnValue = 1;
    for (var i = 1; i < n; ++i) {
        if (isPrime(i) && isPalindrome(i) && i > returnValue) returnValue = i;
    }
    return returnValue;
}

//Get highest prime palindrome below 1000
process.stdout.write('' + findHighestPrimePalindrome(1000));
