import {
  type EmploymentType,
  employmentLabels,
} from '@/shared/model/employment';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  selected: EmploymentType;
  onChange: (type: EmploymentType) => void;
}

export default function EmploymentTypeSelector({ selected, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel>Employment</InputLabel>
      <Select
        value={selected}
        label="Employment"
        onChange={e => onChange(e.target.value)}
      >
        {Object.entries(employmentLabels).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
