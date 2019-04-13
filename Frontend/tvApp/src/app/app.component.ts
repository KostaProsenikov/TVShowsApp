import { Component, OnInit } from '@angular/core';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tvApp';
  constructor(private showsServ: ShowsService) {
  }

  ngOnInit() {
    this.showsServ.getMovies().subscribe(
      (res) => {
        console.log('res', res);
      }
    );
  }
}
