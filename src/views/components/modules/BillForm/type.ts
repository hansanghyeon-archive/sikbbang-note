import type { BILLTYPE, FREQUENCYTYPE, FREQUENCY, PER } from '@model/Bill';

export type Option = {
  value: string;
  label: string;
};

export type BillOption = {
  value: BILLTYPE;
  label: string;
};

export type FrequencyTypeOption = {
  value: FREQUENCYTYPE;
  label: string;
};

export type FrequencyOption = {
  value: FREQUENCY;
  label: string;
};

export type PerOption = {
  value: PER;
  label: string;
};
