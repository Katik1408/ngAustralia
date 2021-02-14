import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.css']
})
export class PipesexampleComponent implements OnInit {

  dateValue = new Date();

  jsonValue = {
    name:'User1',
    country:'Country1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
