import { Control } from 'react-hook-form';

export interface AboutForm {
  percentage: number;
}

export interface AboutProps {
  control: Control<AboutForm>;
}
