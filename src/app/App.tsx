import CountrySelector from '@/features/country-selector';
import CurrencySwitcher from '@/features/currency-switcher';
import EmploymentTypeSelector from '@/features/employment-type-selector';
import SalaryConverter from '@/features/salary-converter';
import useTaxRate from '@/shared/hooks/useTaxRate';
import { type CountryCode, countries } from '@/shared/model/country';
import type { EmploymentType } from '@/shared/model/employment';

import { useState } from 'react';

import { Box, Container, Typography } from '@mui/material';

function App() {
  const [country, setCountry] = useState<CountryCode>('RU');
  const [employment, setEmployment] = useState<EmploymentType>('LC');

  const tax = useTaxRate(country, employment);
  const currency = countries[country].currency;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Salary Analyzer
      </Typography>
      <Box mb={2}>
        <CountrySelector selected={country} onChange={setCountry} />
      </Box>
      <Box mb={2}>
        <EmploymentTypeSelector
          selected={employment}
          onChange={setEmployment}
        />
      </Box>

      <Typography variant="h6" mt={4}>
        Currency: <strong>{currency}</strong>
      </Typography>
      <Typography variant="h6">
        Tax Rate: <strong>{tax}%</strong>
      </Typography>

      <CurrencySwitcher
        amount={30000}
        baseCurrency={countries[country].currency}
        targetCurrency="USD"
      />
      <SalaryConverter salary={30000} />
    </Container>
  );
}

export default App;
