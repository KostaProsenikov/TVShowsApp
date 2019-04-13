import { Component, OnInit } from '@angular/core';
import { ShowsService } from './services/shows.service';

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
          this.movies = result.moviesArray;
          console.log('movies', this.movies );
        }
      }
    );
  }

  openMovie() {
    const url = 'file:/E:/Downloads/1Movies';
    // const fileURL = URL.createObjectURL(url);
    window.open(url);
  }
}
