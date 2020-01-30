import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data: any;

  constructor(private $ser: FilmService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.$ser.getData().subscribe(
      s => this.data = s.results,
      error => alert('Error Occurred!')
    );
  }

}
