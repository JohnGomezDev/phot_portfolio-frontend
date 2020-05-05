import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  public url: String;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = global.url;
  }

  getPictures(): Observable<any> {
    return this._httpClient.get(`${this.url}api/pictures`);
  }
}
