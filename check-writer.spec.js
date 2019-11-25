const assert = require('assert');
const checkWriter = require('./check-writer');

const test = (input, expected) => {
  try {
    console.log(`Testing that input ${input} gives output ${expected}`);
    assert.strictEqual(checkWriter.translate(input), expected);
    console.log('success!');
  } catch (err) {
    console.log('Fail!');
    console.log(err);
  }
};

test(25001, 'Twenty five thousand one Euros and zero cents');
test(25001.0, 'Twenty five thousand one Euros and zero cents');
test(25001.0, 'Twenty five thousand one Euros and zero cents');
test(112.1, 'One hundred twelve Euros and ten cents');
test(
  874327.9,
  'Eight hundred seventy four thousand three hundred twenty seven Euros and ninety cents',
);
test(978, 'Nine hundred seventy eight Euros and zero cents');
test(1.01, 'One Euro and one cent');
test(100, 'One hundred Euros and zero cents');
test(100000, 'One hundred thousand Euros and zero cents');
test(1000000, 'One million Euros and zero cents');
