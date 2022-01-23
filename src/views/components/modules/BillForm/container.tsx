import React from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '@store/bill';
import type IBill from '@model/Bill';

import BillForm from './index';

export default function BillFormContainer() {
  const dispatch = useDispatch();
  const onSubmit = (values: IBill) => {
    dispatch(addBill(values));
  };

  return <BillForm onSubmit={onSubmit} />;
}
