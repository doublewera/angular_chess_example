import { Injectable } from '@angular/core';
import { Game } from './tableau/game';
import { HttpClient, HttpXhrBackend, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamerecordService {
  #backend = 'localhost:3001/';
  #data: Array<Game> = [];
  #http = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
  }));
  #httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor() { 
  }

  getRecords(): Array<Game> {
    return this.#data;
  }

  updateRecords() {
    return this.#http.get<Game>(
      this.#backend)
      .pipe(
        //catchError(this.handleError('addHero', hero))
      );
  }
  saveRecord(record: Game) {
    console.log(record);
    return this.#http.post<Game>(
      this.#backend,
      record,
      this.#httpOptions)
      .pipe(
        //catchError(this.handleError('addHero', hero))
      );
  }
}
