import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

let apiUrl = "http://www.deepaktheinspiration.com/api/DsWebServices/";
let method: any;


@Injectable()
export class AuthServiceProvider {


  constructor(private http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, method) {
    return new Promise((resolve, reject) => {
      let headers = new Headers;
      //console.log(this.getFormData(credentials));
      let formData = this.getFormData(credentials);
      this.http.post(apiUrl + method, formData.toString(), {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe(res => {
        resolve(res);
      }), (err) => {
        reject(err);
      }
    });
  }

  getFormData(object) {
    let formData = new URLSearchParams();
    Object.keys(object).forEach(key => formData.set(key, object[key]));
    return formData;
  }
}
