import { useEffect, useState } from 'react';
import { FREQUENCYTYPE, FREQUENCY, PER } from '@model/Bill';

type useBillProps = {
  amount?: number;
  frequencyType?: FREQUENCYTYPE;
  frequency?: FREQUENCY;
  per?: PER;
};

const useBill = ({ amount, frequencyType, frequency, per }: useBillProps) => {
  const [total, setTotal] = useState(0);

  const handleTotal = (amount?: number) => {
    if (!frequencyType || !frequency || !amount) return;
    if (frequency === FREQUENCY.REGULAR) {
      if (per === 'month') {
        setTotal(amount * 12);
      } else {
        setTotal(amount);
      }
    }
    if (frequency === FREQUENCY.ONCE) {
      setTotal(amount);
    }
  };

  useEffect(() => {
    handleTotal(amount);
  }, [amount, frequencyType, frequency, per]);
  return { total };
};

export default useBill;
