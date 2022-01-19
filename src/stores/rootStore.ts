import { createStore as reduxCreateStore } from 'redux';
import rootReducers from './rootReducers';

const createStore = () => reduxCreateStore(rootReducers);

export default createStore;
