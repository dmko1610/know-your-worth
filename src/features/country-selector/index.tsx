import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface CountrySelectorProps {
  countries: string[];
  selectedCountry: string;
  onChange: (country: string) => void;
}

export default function CountrySelector({
  countries,
  selectedCountry,
  onChange,
}: CountrySelectorProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Country</InputLabel>
      <Select
        labelId="country-label"
        value={selectedCountry}
        onChange={e => onChange(e.target.value)}
      >
        {countries.map((country: string) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
