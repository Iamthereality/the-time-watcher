import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public dateRange: string;

  constructor() {}

  ngOnInit(): void {
    this.dateRange = '17 - 23 Aug, 2020';
  }

  public openCalendar(): void {}
}
