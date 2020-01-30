import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private $http: HttpClient) {

  }

  getData(): Observable<any> {
      let headers = new HttpHeaders();
      return this.$http.get('https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&primary_release_date.lte=2020-01-30&primary_release_date.gte=2019-09-30&api_key=05d23668f1a3dcf645a413f2292b748d', { headers });
  }
}

