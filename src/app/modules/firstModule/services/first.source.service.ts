import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFirstSource } from '../interefaces/first-source.interface';
import { IFirst } from '../interefaces/first.interface';
import { HttpService } from '../../../core/services/httpService/http.service';

@Injectable()
export class FirstSourceService implements IFirstSource {

  constructor(private httpService: HttpService) { }

  getFirst(): Observable<IFirst> {
    return this.httpService.get<IFirst>('/first');
  }
}
