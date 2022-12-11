export function formatOnlyNumbers(value: string): string {
  const regex = /[^0-9]/g;
  return value.replace(regex, '');
}

export function formatCurrency(value: number): string {
  const dollarLocale = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: 'USD',
  });
  const format = dollarLocale.format(value);
  // This add a additional 0 if decimal has less than 2 numbers in order to present the complete value to the user.
  const addDecimal = checkDecimal(format) ? format + '0' : format;
  return addDecimal;
}

function checkDecimal(value: string): boolean {
  const decimal = value.split('.')[1];
  return decimal && decimal.length < 2 ? true : false;
}
