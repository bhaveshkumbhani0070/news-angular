import { Injectable } from '@angular/core';
// import { Http, RequestOptions } from '@angular/http';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(
    // public http: Http,
    private http: HttpClient
  ) { }

  getNews(){
    // return this.http.get('/book/api/latestNews',
    //  { observe: 'response' }
    // );


  return this.http
  .get('http://localhost:3000/api/book/api/latestNews')
  .map(res => res);
  }
  

}
