/**
 * Get the fizz buz value for a given number
 * @param  {[number]} fizz number to be replaced with F
 * @param  {[number]} buzz number to be replaced with B
 * @param  {[number]} n    number to check
 * @return {[string]}      transformed value
 */
function getFizzBuzz(fizz, buzz, n) {
    return n % fizz === 0 && n % buzz === 0 ? 'FB' :
        n % fizz === 0 ? 'F' :
        n % buzz === 0 ? 'B' : n;
}

/**
 * play the fizz buzz game
 * @param  {[number]} fizz number to be replaced with F
 * @param  {[number]} buzz number to be replaced with B
 * @param  {[number]} n    number to play up to
 * @return {[string]}      output of fizz buzz game
 */
function playFizzBuzz(fizz, buzz, n) {
    var results = [];
    for (var i = 1; i < n + 1; i += 1) {
        results.push(getFizzBuzz(fizz, buzz, i));
    }

    return results.join(' ');
}

var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
        var args = line.split(' ');
        process.stdout.write('' + playFizzBuzz(parseInt(args[0]), parseInt(args[1]), parseInt(args[2])) + '\n');
    }
});
