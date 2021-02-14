import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
})
export class SiblingComponent implements OnInit {
  message;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentMessage$.subscribe((data) => {
      this.message = data;
    });
  }

  newMessage(){
    this.dataService.changeMessage(this.message)
  }

}
