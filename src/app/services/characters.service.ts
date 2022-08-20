import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http
      .get(`${environment.apiUrl}/character`)
      .pipe(map((result: any) => result.results));
  }

  getCharacterByName(name: any) {
    return this.http
      .get(`${environment.apiUrl}/character?name=${name}`)
      .pipe(map((result: any) => result.results));
  }
}
