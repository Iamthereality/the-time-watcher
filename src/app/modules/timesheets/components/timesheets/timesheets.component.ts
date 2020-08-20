import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit {
  public dateRange: string;

  constructor() { }

  ngOnInit(): void {
    this.dateRange = '17 - 23 Aug, 2020';
  }
}
