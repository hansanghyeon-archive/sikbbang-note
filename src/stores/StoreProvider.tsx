import React from 'react';
import { Provider } from 'react-redux';

import createStore from './rootStore';

interface prop {
  children: React.ReactNode;
}

function StoreProvider({ children }: prop) {
  return <Provider store={createStore()}>{children}</Provider>;
}

export default StoreProvider;
