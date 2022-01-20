import React from 'react';
import type IBill from '@model/Bill';
import useBill from '@hook/useBill';

export default function Item({ bill }: { bill: IBill }) {
  const { title, amount, category, type, frequencyType, frequency, per } = bill;
  const { total } = useBill(bill);

  return (
    <>
      <div>{title}</div>
      <div>{amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      <div>{category}</div>
      <div>{type}</div>
      <div>{frequencyType}</div>
      <div>{frequency}</div>
      <div>{per}</div>
      <div>{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
    </>
  );
}
