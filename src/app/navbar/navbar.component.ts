import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  //FormBuilder
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailid: ['', Validators.required],
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]],
    });




    // this.loginForm = new FormGroup({
    //   emailid: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.minLength(6), Validators.maxLength(8)]),
    // });
  }


  
  get f(){
      return this.loginForm.controls;
  }


  onSubmit(data) {


    console.log(this.loginForm.controls);

    this.submitted = true;
    console.log(data);
  }
}
