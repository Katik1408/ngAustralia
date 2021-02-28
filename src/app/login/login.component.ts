import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  message;
  ngOnInit(): void {}
  authorize(uname, pwd) {
    let isLoggedin = this.loginService.checkUser(uname, pwd);
    if (isLoggedin) {
      this.router.navigateByUrl('dashboard');
    } else {
      this.message = 'Invalid user';
    }
  }
}
