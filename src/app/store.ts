import { configureStore, createSlice } from '@reduxjs/toolkit'
import {State} from './types';

const births = createSlice({
  name: 'births',
  initialState: {},
  reducers: {
    setBirths: function(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
})

export const store = configureStore({
  reducer: {
    births: births.reducer,
  },
})


export type AppDispatch = typeof store.dispatch

export const {setBirths} = births.actions;


export const getBirths = (state: State) => state.births.list || [];