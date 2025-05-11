import { useEffect, useState } from 'react';

import axios from 'axios';

interface CurrencyConverterProps {
  amount: number;
  baseCurrency: string;
  targetCurrency: string;
}

export default function CurrencySwitcher({
  amount,
  baseCurrency,
  targetCurrency,
}: CurrencyConverterProps) {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = 'a6613227a6344585bc5a53fba9fac107';
  const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

  useEffect(() => {
    const fetchConversionRate = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        const rates = response.data.rates;
        const conversionRate = rates[targetCurrency] / rates[baseCurrency];
        setConvertedAmount(amount * conversionRate);
      } catch (err) {
        setError('Error fetching exchange rates.');
      } finally {
        setLoading(false);
      }
    };

    fetchConversionRate();
  }, [amount, baseCurrency, targetCurrency]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {convertedAmount !== null && (
        <p>
          {amount} {baseCurrency} = {convertedAmount.toFixed(2)}{' '}
          {targetCurrency}
        </p>
      )}
    </div>
  );
}
