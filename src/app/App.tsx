"use client";
import { store } from './store'
import { Provider } from 'react-redux'
import Births from './Births';

export default function App() {
  return (
    <Provider store={store}>
      <Births />
    </Provider>
  );
}