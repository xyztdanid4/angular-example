import { Injectable } from '@angular/core';
import { map, Observable, tap, take } from 'rxjs';
import { IFirstSource } from '../interefaces/first-source.interface';
import { First } from '../models/first.model';
import { IFirst } from '../interefaces/first.interface';
import { Store } from '@ngrx/store';
import { ThisReceiver } from '@angular/compiler';
import { storeFirst } from '../actions/first.actions';

@Injectable()
export class FirstService {

  constructor(
    private iFirstSource: IFirstSource,
    private store: Store) { }

  getFirst(): Observable<First> {
    return this.iFirstSource.getFirst()
      .pipe(
        take(1),
        map((iFirst: IFirst) => new First(iFirst)),
        tap((first: First) => this.store.dispatch(storeFirst({ first })))
      )
  }
}
