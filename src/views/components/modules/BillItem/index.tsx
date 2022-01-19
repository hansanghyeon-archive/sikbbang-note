import React from 'react';
import type IBill from '@model/Bill';

export default function Item({ bill }: { bill: IBill }) {
  const { title, amount, category, type, frequencyType, frequency, per, total } = bill;
  return (
    <>
      <div>{title}</div>
      <div>{amount}</div>
      <div>{category}</div>
      <div>{type}</div>
      <div>{frequencyType}</div>
      <div>{frequency}</div>
      <div>{per}</div>
      <div>{total}</div>
    </>
  );
}
