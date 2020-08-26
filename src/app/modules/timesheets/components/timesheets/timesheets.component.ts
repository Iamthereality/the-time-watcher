import { Component, OnInit } from '@angular/core';
import { SlideLeft, SlideRight } from '../../../../shared/animations/slide-animations';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss'],
  animations: [SlideRight, SlideLeft]
})
export class TimesheetsComponent implements OnInit {
  public dateRange: string;

  constructor() { }

  ngOnInit(): void {
    this.dateRange = '17 - 23 Aug, 2020';
  }
}
