import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  public signIn() {
    this.router.navigate(['/sign-in']);
  }

  public signUp(form: NgForm) {
    form.reset();
  }
}
