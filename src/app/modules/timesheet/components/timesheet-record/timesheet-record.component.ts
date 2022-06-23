import { Component, Input, OnInit } from '@angular/core';
import { IDailyRecord } from '@core/interfaces/domain/daily-record/daily-record.interface';

@Component({
  selector: 'app-timesheet-record',
  templateUrl: './timesheet-record.component.html',
  styleUrls: ['./timesheet-record.component.scss']
})
export class TimesheetRecordComponent implements OnInit {
  @Input() public record: IDailyRecord;

  constructor() {}

  ngOnInit(): void {}
}
