const BILL_ADD = 'BILL_ADD' as const;

export const addBill = () => ({
  type: BILL_ADD
});

type billAction = ReturnType<typeof addBill>;

export type billState = {
  items: Array<number>;
};

const initialState: billState = {
  items: [1, 2, 3, 4]
};

// eslint-disable-next-line default-param-last
const bill = (state: billState = initialState, action: billAction): billState => {
  switch (action.type) {
    case BILL_ADD:
      return { ...state };
    default:
      return state;
  }
};

export default bill;
