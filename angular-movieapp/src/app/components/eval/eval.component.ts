import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss']
})
export class EvalComponent implements OnInit {

  arr: Array<any> = [];

  @Input() evaluation: number;

  constructor() { }

  ngOnInit() {
    this.arr = new Array<any>(this.evaluation);
  }

}
