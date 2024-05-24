import {setBirths, getBirths} from "./store";
import {State, Births} from './types';

const list: Births = [
  {text: 'George Washington', year: 2000},
];

test('gets the list of births from state', () => {
  const state: State = {
    births: {
      list,
    },
  };
  expect(getBirths(state)).toBe(list);
});

test('generates the action to set the list', () => {
  expect(setBirths(list).payload).toBe(list);
});