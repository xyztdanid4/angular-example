import { createReducer, on } from '@ngrx/store';
import { storeFirst } from '../actions/first.actions';
import { First } from '../models/first.model';

export const initialState: First = new First({
  firstPrimitive: -1,
  firstProperties: [{
    id: 1,
    color: "red"
  }]
});

export const firstReducer = createReducer(
  initialState,
  on(storeFirst, (state, { first }) => first)
);
