const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const integerToWords = number => {
  if (number < 10) {
    return ones[number];
  }

  if (number < 20) {
    return teens[number - 10];
  }

  if (number < 100) {
    const tensWord = tens[Math.floor(number / 10) - 2];
    const remainder = number % 10;
    if (remainder) {
      return `${tensWord} ${integerToWords(remainder)}`;
    }
    return tensWord;
  }

  if (number < 1000) {
    const hundreds = ones[Math.floor(number / 100)];
    const remainder = number % 100;
    if (remainder) {
      return `${hundreds} hundred ${integerToWords(remainder)}`;
    }
    return `${hundreds} hundred`;
  }

  if (number < 1000000) {
    const thousands = Math.floor(number / 1000);
    const remainder = number % 1000;
    if (remainder) {
      return `${integerToWords(thousands)} thousand ${integerToWords(remainder)}`;
    }
    return `${integerToWords(thousands)} thousand`;
  }
};

const capitalize = string => string.charAt(0).toLocaleUpperCase() + string.slice(1);

const checkWriter = input => {
  const euro = Math.floor(input);
  const cent = (input - euro).toFixed(2) * 100;

  const euroWords = euro === 1 ? 'One Euro' : `${integerToWords(euro)} Euros`;
  const centWords = cent === 1 ? 'one cent' : `${integerToWords(cent)} cents`;

  return capitalize(`${euroWords} and ${centWords}`);
};

module.exports.translate = checkWriter;
