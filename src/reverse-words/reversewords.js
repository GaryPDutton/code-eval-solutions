/**
 * Reverse the words in the given sentence
 * @param  {[string]} sentence to be reversed
 * @return {[string]}        reversed sentence
 */
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
        process.stdout.write('' + reverseWords(line) + '\n');
    }
});
