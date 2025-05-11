import { useEffect, useState } from 'react';

import axios from 'axios';

export default function useCurrencyConversion(
  amount: number,
  baseCurrency: string,
  targetCurrency: string
) {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (baseCurrency === targetCurrency) {
      setConvertedAmount(amount);
      return;
    }

    const fetchRate = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=${import.meta.env.VITE_CURRENCY_API_KEY}`
        );
        const rates = response.data.rates;
        const conversionRate = rates[targetCurrency] / rates[baseCurrency];
        setConvertedAmount(amount * conversionRate);
      } catch (e) {
        setError(`Error fetching exchange rates: ${e}`);
        setConvertedAmount(null);
      } finally {
        setLoading(false);
      }
    };
    fetchRate();
  }, [amount, baseCurrency, targetCurrency]);

  return { convertedAmount, loading, error };
}
