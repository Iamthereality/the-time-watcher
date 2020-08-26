import { Component, OnInit } from '@angular/core';
import { SlideLeft, SlideRight } from '../../../../shared/animations/slide-animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [SlideRight, SlideLeft]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
