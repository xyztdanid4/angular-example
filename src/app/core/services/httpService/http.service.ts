import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string) {
    return this.httpClient.get<T>(`${environment.baseUrl}/${url}`);
  }
}
