import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetsComponent } from "./components/timesheets/timesheets.component";

const routes: Routes = [
  {
    path: 'timesheets',
    component: TimesheetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TimesheetsRoutingModule {
}
