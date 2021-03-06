import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

//import 'src/typings/custom';

import { LoginModel } from '../../models/login.model';

declare var calljs: any;

function call() {
  alert('Hello from file');
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  order = 1;

  constructor() {
    console.log('Inside Constructor and order is ' + this.order);
    this.order++;
  }

  ngOnInit(): void {
    console.log('Inside ngOnInt and order is ' + this.order);
    this.order++;
    call();
  }

  ngDoCheck(): void {
    console.log('Inside ngDocheck and order is ' + this.order);
    this.order++;
  }
  ngAfterContentInit(): void {
    console.log('Inside ngAfterCOntentInit and order is ' + this.order);
    this.order++;
  }
  ngAfterContentChecked(): void {
    console.log('Inside ngAfterContentChecked and order is ' + this.order);
    this.order++;
  }
  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit and order is ' + this.order);
    this.order++;
  }

  ngOnDestroy(): void {
    console.log('Inside ngOnDestroy and order is ' + this.order);
    this.order++;
  }
  ngAfterViewChecked(): void {
    console.log('Inside ngAfterViewChecked and order is ' + this.order);
    this.order++;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside ngOnChanges and order is ' + this.order);
    this.order++;
  }
  loginModel = new LoginModel();

  onSubmit(data) {
    console.log(data);
  }

  callingcustomjs() {
    calljs();
  }
}
