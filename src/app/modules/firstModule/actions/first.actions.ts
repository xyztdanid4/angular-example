import { createAction, props } from '@ngrx/store';
import { First } from '../models/first.model';

export const storeFirst = createAction(
  '[First] Store First',
  props<{ first: Readonly<First> }>()
)
