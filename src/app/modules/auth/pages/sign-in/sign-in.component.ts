import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  public signIn(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  public signUp() {
    this.router.navigate(['../sign-up'], { relativeTo: this.route }).then();
  }
}
