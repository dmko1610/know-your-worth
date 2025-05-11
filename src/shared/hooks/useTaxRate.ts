import { useMemo } from 'react';

import type { CountryCode } from '../model/country';
import type { EmploymentType } from '../model/employment';

export default function useTaxRate(
  country: CountryCode,
  employmentType: EmploymentType
): number {
  return useMemo(() => {
    if (country === 'RU') {
      switch (employmentType) {
        case 'LC':
          return 13.0;
        case 'IE':
          return 6.0;
        case 'SE':
          return 4.0;
      }
    }

    if (country === 'DE') {
      switch (employmentType) {
        case 'LC':
          return 42.0;
        case 'IE':
          return 33.0;
        case 'SE':
          return 23.0;
      }
    }

    if (country === 'US') {
      switch (employmentType) {
        case 'LC':
          return 28.0;
        case 'IE':
          return 33.0;
        case 'SE':
          return 23.0;
      }
    }

    return 0;
  }, [country, employmentType]);
}
