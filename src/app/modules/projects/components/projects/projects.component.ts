import { Component, OnInit } from '@angular/core';
import { SlideLeft, SlideRight } from '../../../../shared/animations/slide-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [SlideRight, SlideLeft]
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
