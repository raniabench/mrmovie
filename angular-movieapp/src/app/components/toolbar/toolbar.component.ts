import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentButton = 0;
  bntStyle: string;

  constructor() { 
  }

  setButton(value: number) {
    this.currentButton = value;
  }


  ngOnInit() {
  }

}
