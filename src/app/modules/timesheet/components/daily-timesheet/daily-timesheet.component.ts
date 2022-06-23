import { Component, OnInit } from '@angular/core';
import { IDailyRecord } from '@core/interfaces/domain/daily-record/daily-record.interface';

@Component({
  selector: 'app-daily-timesheet',
  templateUrl: './daily-timesheet.component.html',
  styleUrls: ['./daily-timesheet.component.scss']
})
export class DailyTimesheetComponent implements OnInit {
  public dailyRecords: IDailyRecord[];

  constructor() {
    this.dailyRecords = [];
    for (let i = 0; i < 24; i++) {
      this.dailyRecords.push({} as IDailyRecord);
    }
  }

  ngOnInit(): void {}
}
