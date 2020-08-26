import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { DailyTimeSheetsComponent } from './components/daily-time-sheets/daily-time-sheets.component';



@NgModule({
  declarations: [TimesheetsComponent, DailyTimeSheetsComponent],
  imports: [
    CommonModule,
    TimesheetsRoutingModule
  ]
})
export class TimesheetsModule { }
