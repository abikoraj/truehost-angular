import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  constructor(public auth: AuthserviceService, private notifier: NotifierService,private router:Router) {
    this.auth.loginsucceeded.subscribe((res) => {
      this.notifier.notify('success', 'Login Sucessfull');
      console.log(this.auth.user);
      this.auth.go("/student");

    });
    this.auth.loginfailed.subscribe((res) => {
      this.notifier.notify('error', "Authentication Failed");
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login({
      email: this.email,
      password: this.password
    });
  }

}
