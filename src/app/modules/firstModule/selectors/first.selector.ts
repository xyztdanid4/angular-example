import { createFeatureSelector } from '@ngrx/store';
import { First } from '../models/first.model';

export const selectFirst = createFeatureSelector<Readonly<First>>('first');
