export type Option = {
  value: string;
  label: string;
};

export enum BillType {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export type BillOption = {
  value: BillType;
  label: string;
};

export enum FrequencyType {
  FIXED = 'fixed',
  VARIABLE = 'variable'
}

export type FrequencyTypeOption = {
  value: FrequencyType;
  label: string;
};

export enum Frequency {
  ONCE = 'once',
  REGULAR = 'regular'
}

export type FrequencyOption = {
  value: Frequency;
  label: string;
};

export enum Per {
  MONTH = 'month',
  YEAR = 'year'
}

export type PerOption = {
  value: Per;
  label: string;
};

type propsType = {
  title: string;
  amount: number;
  category: string;
  type: BillType;
  frequencyType: FrequencyType;
  frequency: Frequency;
  per: Per;
  total: number;
};

export default propsType;
