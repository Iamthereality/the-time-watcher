import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';


@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
