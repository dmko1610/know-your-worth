export type EmploymentType = 'LC' | 'IE' | 'SE';

export const employmentLabels: Record<EmploymentType, string> = {
  LC: 'Labor code',
  IE: 'Individual Entrepreneur',
  SE: 'Self-Employed/Freelancer',
};
