import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public url: String;

  constructor(
    private _httpClient: HttpClient
  ) { 
    this.url = global.url;
  }

  sendForm(form): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");

    return this._httpClient.post(`${this.url}mail/send`, form, {headers: headers});
  }
}
