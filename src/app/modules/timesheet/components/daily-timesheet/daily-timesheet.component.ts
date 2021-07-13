import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-timesheet',
  templateUrl: './daily-timesheet.component.html',
  styleUrls: ['./daily-timesheet.component.scss']
})
export class DailyTimesheetComponent implements OnInit {
  public hours: number[];

  constructor() {}

  ngOnInit(): void {
    this.hours = [];
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
  }
}
