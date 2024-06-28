export const calculateAgeInWeeks = (birthdate) => {
  const now = new Date();
  const birth = new Date(birthdate);
  return Math.floor((now - birth) / (7 * 24 * 60 * 60 * 1000));
};

export const calculateWeekPosition = (week) => {
  const row = Math.floor(week / 52);
  const col = week % 52;
  return { row, col };
};