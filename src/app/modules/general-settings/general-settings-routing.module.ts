import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSettingsRoutingModule {}
