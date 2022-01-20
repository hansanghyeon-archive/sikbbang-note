import type IBill from '@model/Bill';

const BILL_ADD = 'bill/ADD' as const;

export const addBill = (bill: IBill) => ({
  type: BILL_ADD,
  payload: bill
});

type billAction = ReturnType<typeof addBill>;

export type billState = {
  items: IBill[];
};

const initialState: billState = {
  items: []
};

// eslint-disable-next-line default-param-last
const bill = (state = initialState, action: billAction): billState => {
  switch (action.type) {
    case BILL_ADD:
      return { items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default bill;
