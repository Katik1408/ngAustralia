import { rendererTypeName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstApp';
  h: FormGroup;
  isSpecial = false;

  condition = true

  getColor(country){
    switch(country){
      case 'IN':
        return "red";
      case 'US':
        return "green"
      case 'FR':
        return "blue"

    }
  }
  people: any[] = [
    {
      name: 'Rahul',
      country: 'IN',
      phone:{
        mobile:'1234567',
        landline:'123456'
      }
    },
    {
      name: 'Josh',
      country: 'US',
    },
    {
      name: 'Andrew',
      country: 'FR',
    },
    {
      name:'Rohit',
      country:'IN'
    }
  ];
}
