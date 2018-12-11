import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fb-demo1',
  templateUrl: './fb-demo1.component.html',
  styleUrls: ['./fb-demo1.component.scss']
})
export class FbDemo1Component implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
  }

  ngOnInit() {
  }

}
