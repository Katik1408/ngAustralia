import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data/data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnDestroy {
  message;

  username;

  subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage$.subscribe(
      (data) => {
        this.message = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  receiveEventFromChild($event) {
    this.username = $event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
