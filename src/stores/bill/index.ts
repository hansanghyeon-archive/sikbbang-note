import { createAction, ActionType, createReducer } from 'typesafe-actions';
import type IBill from '@model/Bill';

const BILL_ADD = 'bill/ADD' as const;

export const addBill = createAction(BILL_ADD)();

const actions = { addBill };
type BillAction = ActionType<typeof actions>;

export type BillState = {
  items: Array<IBill>;
};

const initialState: BillState = {
  items: []
};

const bill = createReducer<BillState, BillAction>(initialState, {});

export default bill;
