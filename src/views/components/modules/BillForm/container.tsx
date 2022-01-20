import React from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '@store/bill';
import BillForm from './index';

export default function BillFormContainer() {
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(addBill(values));
  };

  return <BillForm onSubmit={onSubmit} />;
}
