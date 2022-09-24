import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFirstSource } from '../interefaces/first-source.interface';
import { First } from '../models/first.model';
import { IFirst } from '../interefaces/first.interface';

@Injectable()
export class FirstService {

  constructor(private iFirstSource: IFirstSource) { }

  getFirst(): Observable<First> {
    return this.iFirstSource.getFirst()
      .pipe(
        map((iFirst: IFirst) => new First(iFirst)
        )
      )
  }
}
