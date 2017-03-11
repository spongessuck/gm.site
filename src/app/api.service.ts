import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private _path = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this._path + '/posts')
    .map( res => {
      if (res.headers.get('content-type').indexOf('application/json') === 0) {
        return res.json();
      }
    });
  }
}
