import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  private url: string = environment.api_url;

  constructor(public _http: HttpClient) { }



  getAll(endPoint: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(`${this.url}${endPoint}`, { headers: headers });
  }

}
