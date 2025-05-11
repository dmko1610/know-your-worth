import { type CountryCode, countries } from '@/shared/model/country';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface CountryInfo {
  name: string;
  code: CountryCode;
  currency: string;
}

interface CountrySelectorProps {
  selected: CountryCode;
  onChange: (country: CountryCode) => void;
}

export default function CountrySelector({
  selected,
  onChange,
}: CountrySelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Country</InputLabel>
      <Select
        label="Country"
        value={selected}
        onChange={e => onChange(e.target.value as CountryCode)}
      >
        {Object.values(countries).map((country: CountryInfo) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
