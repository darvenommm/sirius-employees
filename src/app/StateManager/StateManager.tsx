import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

interface StateManagerProperties {
  readonly children: ReactNode | ReactNode[];
}

export const StateManager = ({ children }: StateManagerProperties): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};
