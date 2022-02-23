import { Component, OnInit } from '@angular/core';
import { DailyRecordInterface } from "../../../../core/interfaces/daily-record/daily-record.interface";

@Component({
  selector: 'app-daily-timesheet',
  templateUrl: './daily-timesheet.component.html',
  styleUrls: ['./daily-timesheet.component.scss']
})
export class DailyTimesheetComponent implements OnInit {
  public dailyRecords: DailyRecordInterface[];

  constructor() {
    this.dailyRecords = [];
    for (let i = 0; i < 24; i++) {
      this.dailyRecords.push({} as DailyRecordInterface)
    }
  }

  ngOnInit(): void {}
}
