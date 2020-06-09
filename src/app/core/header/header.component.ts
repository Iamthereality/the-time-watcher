import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  windowSizes = {
    width: 0,
    height: 0
  };

  constructor() {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.windowSizes.width = window.innerWidth;
    this.windowSizes.height = window.innerHeight;
  }
}
