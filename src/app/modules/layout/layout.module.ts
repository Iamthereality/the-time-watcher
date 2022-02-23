import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from "./components/header/header.component";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { LayoutComponent } from "./components/layout/layout.component";


@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {}
