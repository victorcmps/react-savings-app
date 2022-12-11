export function formatMonth(date: Date): string {
  return date.toLocaleString('en-US', { month: 'long' });
}

export function getNextOrPrevDate(date: Date, isPreviousMonth: boolean): Date {
  // Verify if date reached the 12 or 1 month (if clicked on previous) to advance to january or get back to december respectively
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
