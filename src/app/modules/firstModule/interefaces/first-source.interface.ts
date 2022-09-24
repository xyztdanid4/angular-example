import { Observable } from "rxjs";
import { IFirst } from './first.interface';

export abstract class IFirstSource {
  abstract getFirst(): Observable<IFirst>;
}
