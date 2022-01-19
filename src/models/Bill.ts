export enum BILLTYPE {
  INCOME = 'income',
  EXPENSE = 'expense'
}

export enum FREQUENCYTYPE {
  FIXED = 'fixed',
  VARIABLE = 'variable'
}

export enum FREQUENCY {
  ONCE = 'once',
  REGULAR = 'regular'
}

export enum PER {
  MONTH = 'month',
  YEAR = 'year'
}

export default interface IBill {
  title: string;
  amount: number;
  category: string;
  type: BILLTYPE;
  frequencyType: FREQUENCYTYPE;
  frequency: FREQUENCY;
  per: PER;
  total: number;
}
