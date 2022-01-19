import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore as reduxCreateStore, combineReducers } from 'redux';
import bill from '@store/bill';

const rootReducer = combineReducers({
  bill
});

export type RootState = ReturnType<typeof rootReducer>;

const createStore = () =>
  reduxCreateStore(rootReducer, process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined);

export default createStore;
