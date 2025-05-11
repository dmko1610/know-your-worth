export function getSalaryBreakdown({
  monthlySalary,
  hoursPerDay = 8,
  daysPerWeek = 5,
}: {
  monthlySalary: number;
  hoursPerDay?: number;
  daysPerWeek?: number;
}) {
  const weeksPerMonth = 4.345;
  const workingDaysPerMonth = daysPerWeek * weeksPerMonth;
  const workingHoursPerMonth = workingDaysPerMonth * hoursPerDay;
  const workingMinutesPerMonth = workingHoursPerMonth * 60;
  const workingSecondsPerMonth = workingMinutesPerMonth * 60;

  const perSecond = monthlySalary / workingSecondsPerMonth;
  const perMinute = perSecond * 60;
  const perHour = perMinute * 60;
  const perDay = perHour * hoursPerDay;
  const perWeek = perDay * daysPerWeek;
  const perMonth = monthlySalary;
  const perYear = monthlySalary * 12;

  return {
    second: perSecond,
    minute: perMinute,
    hour: perHour,
    day: perDay,
    week: perWeek,
    month: perMonth,
    year: perYear,
  };
}