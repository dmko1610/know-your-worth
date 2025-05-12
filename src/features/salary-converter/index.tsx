import { getSalaryBreakdown } from '@/utils/salary';

import { useState } from 'react';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';

interface SalaryConverterProps {
  salary: number;
}

export default function SalaryConverter({ salary }: SalaryConverterProps) {
  const [hoursPerDay, setHoursPerDay] = useState<number | string>(8);
  const [daysPerWeek, setDaysPerWeek] = useState<number | string>(5);

  const breakdown = getSalaryBreakdown({
    monthlySalary: salary,
    hoursPerDay,
    daysPerWeek,
  });

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Salary Breakdown
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          fullWidth
          label="Hours per Day"
          type="number"
          slotProps={{ htmlInput: { min: 1, max: 24 } }}
          value={hoursPerDay}
          onChange={e => {
            const value = e.target.value;
            setHoursPerDay(value === '' ? '' : Number(value));
          }}
        />
        <TextField
          fullWidth
          label="Days per Week"
          type="number"
          slotProps={{ htmlInput: { min: 1, max: 7 } }}
          value={daysPerWeek}
          onChange={e => {
            const value = e.target.value;
            setDaysPerWeek(value === '' ? '' : Number(value));
          }}
        />
      </Box>

      <List>
        {Object.entries(breakdown).map(([unit, value]) => (
          <ListItem key={unit} disablePadding>
            <ListItemText
              primary={`Per ${unit.charAt(0).toUpperCase() + unit.slice(1)}: ${' '} ${value.toFixed(unit === 'second' ? 5 : 2)}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
