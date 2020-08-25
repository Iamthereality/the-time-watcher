import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/components/sign-up/sign-up.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { ReportsModule } from './modules/reports/reports.module';
import { TimesheetsModule } from './modules/timesheets/timesheets.module';
import { AuthGuard } from './modules/auth/guards/auth.guard/auth.guard';
import { ProjectsModule } from './modules/projects/projects.module';
import { HomeModule } from './modules/home/home.module';
import { ProfileSettingsModule } from './modules/profile-settings/profile-settings.module';
import { AdministrationModule } from './modules/administration/administration.module';
import { GeneralSettingsModule } from './modules/general-settings/general-settings.module';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => HomeModule
      },
      {
        path: 'timesheets',
        loadChildren: () => TimesheetsModule
      },
      {
        path: 'projects',
        loadChildren: () => ProjectsModule
      },
      {
        path: 'reports',
        loadChildren: () => ReportsModule
      },
      {
        path: 'administration',
        loadChildren: () => AdministrationModule
      },
      {
        path: 'profile-settings',
        loadChildren: () => ProfileSettingsModule
      },
      {
        path: 'general-settings',
        loadChildren: () => GeneralSettingsModule
      }
    ],
    component: LayoutComponent
  },
  {
    path: '**',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
