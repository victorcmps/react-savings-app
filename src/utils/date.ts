/**
 * Get the full month name of a date.
 * @param {Date} date - The date
 * @returns {string} Returns the name
 */
export function formatMonth(date: Date): string {
  return date.toLocaleString('en-US', { month: 'long' });
}

/**
 * Get the next or the previous month of a date.
 * @param {Date} date - The date
 * @param {boolean} isPreviousMonth - Tells the method whether to look for the previous date
 * @returns {string} Returns the full date
 */
export function getNextOrPrevDate(date: Date, isPreviousMonth: boolean): Date {
  /**  Verify if date reached December or January (if clicked on previous) to advance to January or get back to December respectively */
  const maxMonth = isPreviousMonth ? 0 : 11;
  if (date.getMonth() === maxMonth) {
    return isPreviousMonth
      ? new Date(date.getFullYear() - 1, 11, 1)
      : new Date(date.getFullYear() + 1, 0, 1);
  }
  return new Date(
    date.getFullYear(),
    isPreviousMonth ? date.getMonth() - 1 : date.getMonth() + 1,
    1
  );
}

/**
 * Returns the distance between two months.
 * @param {Date} startDate - The first date
 * @param {Date} endDate - The second date
 * @returns {number} Returns difference between months
 */
export function monthDiff(startDate: Date, endDate: Date): number {
  return (
    startDate.getMonth() -
    endDate.getMonth() +
    12 * (startDate.getFullYear() - endDate.getFullYear())
  );
}
