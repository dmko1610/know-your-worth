import { getSalaryBreakdown } from '@/utils/salary';

interface SalaryConverterProps {
  salary: number;
}

export default function SalaryConverter({ salary }: SalaryConverterProps) {
  const breakdown = getSalaryBreakdown({ monthlySalary: salary });

  return (
    <div>
      <h3>Salary Breakdown</h3>
      <ul>
        {Object.entries(breakdown).map(([unit, value]) => (
          <li key={unit}>
            Per {unit.charAt(0).toUpperCase() + unit.slice(1)}:{' '}
            {value?.toFixed(unit === 'second' ? 5 : 2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
