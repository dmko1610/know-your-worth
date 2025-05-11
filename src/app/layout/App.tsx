import CountrySelector from '@/features/country-selector';
import { useState } from 'react';

const countries = ['USA', 'Russia', 'UK', 'Germany', 'Kazakhstan'];

function App() {
  const [country, setCountry] = useState<string>('Russia');

  return (
    <main>
      <h1 className="text-3xl font-bold">Salary Analyzer</h1>
      <CountrySelector
        countries={countries}
        selectedCountry={country}
        onChange={setCountry}
      />
    </main>
  );
}

export default App;
