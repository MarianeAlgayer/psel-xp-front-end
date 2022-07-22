import { BrowserRouter as Router } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import sharesReducer from '../redux/slices/sharesSlice';
import userReducer from '../redux/slices/userSlice';

const rootReducer = {
  reducer: {
    user: userReducer,
    shares: sharesReducer,
  },
};

function render(
  ui,
  {
    preloadedState,
    store = configureStore(rootReducer, preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
