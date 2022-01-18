import React, { useState, useEffect } from 'react';
import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

function Bill({ submit }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState<Option|null>(null);
  const [frequencyType, setFrequencyType] = useState<Option|null>(null); // 주기 고정,변동
  const [frequency, setFrequency] = useState<Option|null>(null); // 주기 일시, 정기
  const [per, setPer] = useState<Option|null>(null); // 주기 월,년
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

  const handleType = (option: Option | null) => {
    setType(option);
  };

  const handleFrequencyType = (option: Option | null) => {
    setFrequencyType(option);
  };

  const handleFrequency = (option: Option | null) => {
    setFrequency(option);
  };

  const handlePer = (option: Option | null) => {
    setPer(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({
      title,
      amount,
      category,
      type: type!.value,
      frequencyType: frequencyType!.value,
      frequency: frequency!.value,
      per: per!.value,
      total
    });
  };

  useEffect(() => {
    if (frequencyType === null || frequency === null) return;
    if (frequencyType!.value === 'fixed' && frequency!.value === 'regular') {
      console.log(frequencyType, frequency, per);
      if (per!.value === 'month') {
        setTotla(amount * 12);
        console.log(amount * 12);
      }
      if (per!.value === 'year') {
        setTotla(amount);
      }
    }
  }, [amount, frequencyType, frequency, total]);

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
            value={type}
            onChange={handleType}
            options={[
              { value: 'income', label: '수입' },
              { value: 'expense', label: '지출' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={frequencyType}
            onChange={handleFrequencyType}
            options={[
              { value: 'fixed', label: '고정' },
              { value: 'variable', label: '변동' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={frequency}
            onChange={handleFrequency}
            options={[
              { value: 'once', label: '일시' },
              { value: 'regular', label: '정기' }
            ]}
          />
        </div>
        <div className="col-span-3">
          <Select
            value={per}
            onChange={handlePer}
            options={[
              { value: 'month', label: '월' },
              { value: 'year', label: '년' }
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

export default Bill;
