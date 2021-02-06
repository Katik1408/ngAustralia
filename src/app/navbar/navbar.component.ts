import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid : new FormControl('',[Validators.required,Validators.max(5)]),
      password: new FormControl('',[Validators.min(3),Validators.max(5)])
    })
  }

  onSubmit(data){
    console.log(data)
  }


}
