import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IFirstSource } from '../interefaces/first-source.interface';
import { IFirst } from '../interefaces/first.interface';

@Injectable()
export class FirstMockService implements IFirstSource {

  constructor() { }

  getFirst(): Observable<IFirst> {
    return of({
      firstPrimitive: 123,
      firstProperties: [
        {
          id: 0,
          color: 'red'
        },
        {
          id: 1,
          color: 'green'
        },
        {
          id: 2,
          color: 'green'
        },
      ]
    }).pipe(
      delay(3000)
    )
  }
}
