import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";
import { AppGuard } from "../../core/guards/app/app.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AppGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'timesheet' },
      {
        path: 'timesheet',
        loadChildren: () => import('../timesheet/timesheet.module').then(m => m.TimesheetModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'administration',
        loadChildren: () => import('../administration/administration.module').then(m => m.AdministrationModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('../profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule)
      },
      {
        path: 'general-settings',
        loadChildren: () => import('../general-settings/general-settings.module').then(m => m.GeneralSettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
