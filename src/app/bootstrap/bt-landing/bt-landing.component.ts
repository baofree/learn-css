import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-landing',
  templateUrl: './bt-landing.component.html',
  styleUrls: ['./bt-landing.component.scss']
})
export class BtLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.sr = ScrollReveal({ duration: 1000});
    sr.reveal('.site-content .d-flex');
    sr.reveal('.section-1 .card');
    sr.reveal('.section-2 .d-flex');
    sr.reveal('.section-3 .col-md-4');
    sr.reveal('.section-4 .col-md-7, col-md-5');
  }

}
