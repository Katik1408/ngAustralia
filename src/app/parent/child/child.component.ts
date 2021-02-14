import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();

  username;
  constructor() {}

  ngOnInit(): void {}

  sendUserNameToParent() {
    this.messagetoparent.emit(this.username);
  }
}
