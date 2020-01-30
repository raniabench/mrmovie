import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() title: string;
  @Input() descriptlangion: string;
  @Input() dateCr: Date;
  @Input() popularity: number;
  @Input() voteNb: number;
  @Input() voteAv: number;
  @Input() desc: string;
  @Input() backdrop: string;
  @Input() poster: string;
  
  constructor() { }

  ngOnInit() {
  }

}
