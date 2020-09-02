import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { TimesheetsRoutingModule } from './timesheets-routing.module';
import { DailyTimesheetComponent } from './components/daily-timesheet/daily-timesheet.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DaySelectorComponent } from './components/day-selector/day-selector.component';
import { DailyStatisticsComponent } from './components/daily-statistics/daily-statistics.component';



@NgModule({
  declarations: [LayoutComponent, DailyTimesheetComponent, CalendarComponent, DaySelectorComponent, DailyStatisticsComponent],
  imports: [
    CommonModule,
    TimesheetsRoutingModule
  ]
})
export class TimesheetsModule { }
