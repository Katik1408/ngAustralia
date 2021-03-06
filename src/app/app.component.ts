import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private ar: ActivatedRoute) {}
  products$;
  id = 5;
  

  //4200/dashabord/5?search=5&another=default

  ngOnInit(): void {
    this.router.navigate(['/dashboard/', this.id], {
      queryParams: { search: this.id,another : 'default' },
      skipLocationChange : false
    });
  //  this.ar.paramMap.pipe(switchMap((param)=>{
  //    this.id = param.get('id')
  //    return this.products$;
  //  }))
  }
  title = 'FirstApp';
  h: FormGroup;
  isSpecial = false;

  condition = true;
  getColor(country) {
    switch (country) {
      case 'IN':
        return 'red';
      case 'US':
        return 'green';
      case 'FR':
        return 'blue';
    }
  }
  people: any[] = [
    {
      name: 'Rahul',
      country: 'IN',
      phone: {
        mobile: '1234567',
        landline: '123456',
      },
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
      name: 'Rohit',
      country: 'IN',
    },
  ];
}
