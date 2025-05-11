interface SalaryConverterProps {
  salary: number;
}

export default function SalaryConverter({ salary }: SalaryConverterProps) {
  const salaryPerSecond = salary / (30 * 24 * 60 * 60);
  const salaryPerMinute = salaryPerSecond * 60;
  const salaryPerHour = salaryPerMinute * 60;
  const salaryPerDay = salaryPerHour * 24;
  const salaryPerWeek = salaryPerDay * 7;
  const salaryPerMonth = salaryPerWeek * 4;
  const salaryPerYear = salaryPerMonth * 12;

  return (
    <div>
      <h3>Salary Breakdown</h3>
      <p>Per Second: {salaryPerSecond.toFixed(5)}</p>
      <p>Per Minute: {salaryPerMinute.toFixed(2)}</p>
      <p>Per Hour: {salaryPerHour.toFixed(2)}</p>
      <p>Per Day: {salaryPerDay.toFixed(2)}</p>
      <p>Per Week: {salaryPerWeek.toFixed(2)}</p>
      <p>Per Month: {salaryPerMonth.toFixed(2)}</p>
      <p>Per Year: {salaryPerYear.toFixed(2)}</p>
    </div>
  );
}
