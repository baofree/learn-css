import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bt-sidebar',
  templateUrl: './bt-sidebar.component.html',
  styleUrls: ['./bt-sidebar.component.scss']
})
export class BtSidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      console.log('click');
      $('#sidebar').toggleClass('active');
    });
  }

}
