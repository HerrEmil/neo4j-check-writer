const assert = require('assert');
const checkWriter = require('./check-writer');

assert.strictEqual(checkWriter.translate(25001), 'Twenty five thousand one Euros and zero cents');
assert.strictEqual(checkWriter.translate(25001.0), 'Twenty five thousand one Euros and zero cents');
assert.strictEqual(checkWriter.translate(25001.0), 'Twenty five thousand one Euros and zero cents');
assert.strictEqual(checkWriter.translate(112.1), 'One hundred twelve Euros and ten cents');
assert.strictEqual(
  checkWriter.translate(874327.9),
  'Eight hundred seventy four thousand three hundred twenty seven Euros and ninety cents',
);
assert.strictEqual(checkWriter.translate(978), 'Nine hundred seventy eight Euros and zero cents');
assert.strictEqual(checkWriter.translate(1.01), 'One Euro and one cent');
assert.strictEqual(checkWriter.translate(100), 'One hundred Euros and zero cents');
assert.strictEqual(checkWriter.translate(100000), 'One hundred thousand Euros and zero cents');
