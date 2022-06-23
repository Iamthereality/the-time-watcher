import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ProfileSettingsRoutingModule } from './profile-settings-routing.module';

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [CommonModule, ProfileSettingsRoutingModule]
})
export class ProfileSettingsModule {}
