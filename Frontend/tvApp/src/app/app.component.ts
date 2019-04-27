import { Component, OnInit } from '@angular/core';
import { ShowsService } from './services/shows.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movies App';
  movies = [];
  model = '';
  constructor(private showsServ: ShowsService) {
  }

  ngOnInit() {
    this.showsServ.getMovies().subscribe(
      (res) => {
        const result = JSON.parse(res);
        if (result && result.moviesArray) {
          this.movies = [];
          result.moviesArray.forEach((movie: string) => {
            const parsedMovie = movie.slice(0, -5);
            this.showsServ.searchMovie(parsedMovie).subscribe(
              (tmbdResult: any) => {
                if (tmbdResult.results && tmbdResult.results.length) {
                  const movieFound = tmbdResult.results[0];
                  const baseImageUrl = `https://image.tmdb.org/t/p/w500/`;
                  this.movies.push({ originalName: movie,
                                     poster: baseImageUrl + movieFound.poster_path,
                                     rating: movieFound.vote_average,
                                     movieObj: movieFound});
                } else {
                  this.movies.push({originalName: movie, rating: 0, parsedName: parsedMovie});
                }
                this.movies = _.orderBy(this.movies, ['rating'], ['desc']);
              }
            );
          });
        }
      }
    );
  }

  openMovie(name: string) {
    this.showsServ.openMovie(name).subscribe(
      () => { console.log('Success'); }
    );
  }
}
