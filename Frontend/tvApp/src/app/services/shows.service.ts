import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  mainUrl = `https://api.themoviedb.org/3/`;
  apiKey  = '1fee666c87f730b69f9c500daaef9a1f';

  getMovies(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }

  searchMovie(name: string) {
    const fullUrl = this.mainUrl + `search/movie?api_key=${this.apiKey}&query=${name}`;
    return this.http.get(fullUrl);
  }

  openMovie(name: string) {
    return this.http.get(`http://localhost:3000/movie/${name}/`);
  }
}
