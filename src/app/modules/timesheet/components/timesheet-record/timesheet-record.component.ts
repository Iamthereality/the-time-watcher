import { Component, Input, OnInit } from '@angular/core';
import { DailyRecordInterface } from "../../../../core/interfaces/daily-record/daily-record.interface";

@Component({
  selector: 'app-timesheet-record',
  templateUrl: './timesheet-record.component.html',
  styleUrls: ['./timesheet-record.component.scss']
})
export class TimesheetRecordComponent implements OnInit {
  @Input() public record: DailyRecordInterface;

  constructor() {}

  ngOnInit(): void {}
}
