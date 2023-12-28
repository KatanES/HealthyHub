export const getCurrentMonths = () => {
  const now = new Date();
  return now.getMonth();
};

export const getLastYearMonths = () => {
  const currentMonth = getCurrentMonths();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthsPassed = [];
  for (let i = 0; i <= currentMonth; i++) {
    monthsPassed.push(months[i]);
  }
  return monthsPassed;
};
