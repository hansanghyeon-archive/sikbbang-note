import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import * as Type from './type';

function BillForm({ submit }: { submit: (e: Type.default) => void }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [billType, setBillType] = useState<Type.BillOption | null>(null);
  const [frequencyType, setFrequencyType] = useState<Type.FrequencyTypeOption | null>(null); // 주기 고정,변동
  const [frequency, setFrequency] = useState<Type.FrequencyOption | null>(null); // 주기 일시, 정기
  const [per, setPer] = useState<Type.PerOption | null>(null); // 주기 월,년
  const [total, setTotla] = useState(0);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleAmountFoucs = (e: React.FocusEvent<HTMLInputElement>) => {
    if (amount === 0) e.target.select();
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleBillType = (option: Type.BillOption | null) => {
    setBillType(option);
  };

  const handleFrequencyType = (option: Type.FrequencyTypeOption | null) => {
    setFrequencyType(option);
  };

  const handleFrequency = (option: Type.FrequencyOption | null) => {
    setFrequency(option);
  };

  const handlePer = (option: Type.PerOption | null) => {
    setPer(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (billType === null || frequencyType === null || frequency === null || per === null) return;
    submit({
      title,
      amount,
      category,
      type: billType.value,
      frequencyType: frequencyType.value,
      frequency: frequency.value,
      per: per.value,
      total
    });
  };

  useEffect(() => {
    if (frequencyType === null || frequency === null) return;
    if (frequency?.value === Type.Frequency.REGULAR) {
      if (per?.value === 'month') {
        setTotla(amount * 12);
      } else {
        setTotla(amount);
      }
    }
    if (frequency?.value === Type.Frequency.ONCE) {
      setTotla(amount);
    }
  }, [amount, frequencyType, frequency, total, per]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="grid grid-cols-6 gap-[8px] flex-wrap w-[375px] mx-auto">
        <div className="col-span-6">
          <input type="text" className="w-full" placeholder="항목" onChange={handleTitle} value={title ?? ''} />
        </div>
        <div className="col-span-4">
          <input
            type="number"
            className="w-full"
            placeholder="금액"
            onChange={handleAmount}
            value={amount ?? ''}
            onFocus={handleAmountFoucs}
          />
        </div>
        <div className="col-span-2">
          <input type="text" className="w-full" placeholder="범주" onChange={handleCategory} value={category ?? ''} />
        </div>
        <div className="col-span-3">
          <Select
            value={billType}
            onChange={handleBillType}
            options={[
              { value: Type.BillType.INCOME, label: '수입' },
              { value: Type.BillType.EXPENSE, label: '지출' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={frequencyType}
            onChange={handleFrequencyType}
            options={[
              { value: Type.FrequencyType.FIXED, label: '고정' },
              { value: Type.FrequencyType.VARIABLE, label: '변동' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={frequency}
            onChange={handleFrequency}
            options={[
              { value: Type.Frequency.ONCE, label: '일시' },
              { value: Type.Frequency.REGULAR, label: '정기' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={per}
            onChange={handlePer}
            isDisabled={frequency?.value === Type.Frequency.ONCE}
            options={[
              { value: Type.Per.MONTH, label: '월' },
              { value: Type.Per.YEAR, label: '년' }
            ]}
          />
        </div>
        <div className="col-span-6">
          <input type="text" value={total} readOnly className="w-full text-gray-400" placeholder="연 수입 / 연 지출" />
        </div>
        <div className="col-span-6">
          <button type="submit" className="btn py-[8px] w-full rounded-[4px] bg-blue-300">
            제출
          </button>
        </div>
      </div>
    </form>
  );
}

export default BillForm;
