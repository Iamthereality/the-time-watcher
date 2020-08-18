import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from "./modules/auth/components/sign-in/sign-in.component";
import { SignUpComponent } from "./modules/auth/components/sign-up/sign-up.component";
import { LayoutComponent } from "./core/components/layout/layout.component";
import { AuthGuard } from "./modules/auth/guards/auth.guard/auth.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
