import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public url: String;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = global.url;
  }

  getPosts(): Observable<any> {
    return this._httpClient.get(`${this.url}api/posts`);
  }
}
