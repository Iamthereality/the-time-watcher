import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { TimesheetsRoutingModule } from './timesheets-routing.module';



@NgModule({
  declarations: [TimesheetsComponent],
  imports: [
    CommonModule,
    TimesheetsRoutingModule
  ]
})
export class TimesheetsModule { }
