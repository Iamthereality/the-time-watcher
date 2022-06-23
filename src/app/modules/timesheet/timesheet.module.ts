import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { DailyTimesheetComponent } from './components/daily-timesheet/daily-timesheet.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DaySelectorComponent } from './components/day-selector/day-selector.component';
import { DailyStatisticsComponent } from './components/daily-statistics/daily-statistics.component';
import { TimesheetRecordComponent } from './components/timesheet-record/timesheet-record.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TimesheetComponent,
    DailyTimesheetComponent,
    CalendarComponent,
    DaySelectorComponent,
    DailyStatisticsComponent,
    TimesheetRecordComponent
  ],
  imports: [CommonModule, TimesheetRoutingModule, SharedModule],
  exports: [
    TimesheetComponent,
    DailyTimesheetComponent,
    CalendarComponent,
    DaySelectorComponent,
    DailyStatisticsComponent
  ]
})
export class TimesheetModule {}
