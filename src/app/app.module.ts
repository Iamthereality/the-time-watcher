import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/components/header/header.component';
import { SideBarComponent } from './modules/layout/components/side-bar/side-bar.component';
import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './modules/auth/components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SignInComponent,
    LayoutComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
