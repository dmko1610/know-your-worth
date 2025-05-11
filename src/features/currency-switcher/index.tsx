import useCurrencyConversion from './useCurrencyConversion';

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
  const { convertedAmount, loading, error } = useCurrencyConversion(
    amount,
    baseCurrency,
    targetCurrency
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <p>
      {amount} {baseCurrency} = {convertedAmount?.toFixed(2)} {targetCurrency}
    </p>
  );
}
