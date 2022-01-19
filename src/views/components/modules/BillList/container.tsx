import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@store/rootStore';
import BillList from './index';

export default function BillListContainer() {
  const items = useSelector((state: RootState) => state.bill.items);

  return <BillList bills={items} />;
}
