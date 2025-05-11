export type CountryCode = 'RU' | 'US' | 'DE';

export interface CountryInfo {
  name: string;
  code: CountryCode;
  currency: string;
}

export const countries: Record<CountryCode, CountryInfo> = {
  RU: { name: 'Russia', code: 'RU', currency: 'RUB' },
  US: { name: 'USA', code: 'US', currency: 'USD' },
  DE: { name: 'Germany', code: 'DE', currency: 'EUR' },
};
