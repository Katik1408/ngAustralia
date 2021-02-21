import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject('Default Message from Behavior Subject');
  currentMessage$ = this.dataSource.asObservable();
  constructor() {}

  changeMessage(message: string) {
    this.dataSource.next(message);
  }
}
//HTTPClient Module

//HTTPVerbs
//GET,PUT,POST,DELETE,PATCH