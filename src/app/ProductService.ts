import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => {
        return <Album>response.json();
    });
  }
}
