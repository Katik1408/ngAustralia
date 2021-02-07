import { Component } from '@angular/core';
import {LoginModel} from '../../models/login.model'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  loginModel = new LoginModel();

  // constructor(private login: LoginModel){
  //   this.loginModel  = login;
  // }


  onSubmit(data){
    console.log(data)
  }

}
