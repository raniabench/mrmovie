import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  data: any;
  ev:number;

  constructor(private $ser: FilmService) { }

  ngOnInit() {
    this.ev=4;
    this.getData();
  }

  getData() {
    this.$ser.getData().subscribe(
      s => this.data = s.results,
      error => alert('Error Occurred !')
    );
  }


}
