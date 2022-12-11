/**
 * Remove characters and punctuation from given string
 * @param {number} value - The number
 * @returns {string} Returns formatted value with only numbers
 */
export function formatOnlyNumbers(value: string): string {
  const regex = /[^0-9]/g;
  return value.replace(regex, '');
}

/**
 * Format a number to US Currency
 * @param {number} value - The number
 * @returns {string} Returns formatted value
 */
export function formatCurrency(value: number): string {
  const dollarLocale = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: 'USD',
  });
  const currency = dollarLocale.format(value);
  const formattedValue = checkDecimal(currency) ? currency + '0' : currency;
  return formattedValue;
}

/**
 * Given a number, verifies if the decimal has less than 2 numbers.
 * @param {string} value - The number
 * @returns {boolean} Return ´true´ if decimal has less than 2 numbers, and ´false´ otherwise.
 */
function checkDecimal(value: string): boolean {
  const decimal = value.split('.')[1];
  return decimal && decimal.length < 2 ? true : false;
}
