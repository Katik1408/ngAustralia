import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterContentInit {
  @Input() messagefromparent;
  @Output() messagetoparent = new EventEmitter();

  username;
  sendUserNameToParent() {
    this.messagetoparent.emit(this.username);
  }
  constructor() {
    console.log('Inside constructor and message is ' + this.messagefromparent);
  }
  ngOnInit(): void {
    console.log('Inside ngOnInit and message is ' + this.messagefromparent);
  }

  ngDoCheck(): void {
    console.log('Inside ngDocheck and message is ' + this.messagefromparent);
  }
  ngAfterContentInit(): void {
    console.log(
      'Inside ngAfterContentInit and message is ' + this.messagefromparent
    );
  }
  ngAfterContentChecked(): void {
    console.log(
      'Inside ngAfterContentChecked and message is ' + this.messagefromparent
    );
  }
  ngAfterViewInit(): void {
    console.log(
      'Inside ngAfterVIewInit and message is ' + this.messagefromparent
    );
  }

  ngOnDestroy(): void {
    console.log('Inside ngOnDestroy and message is ' + this.messagefromparent);
  }
  ngAfterViewChecked(): void {
    console.log(
      'Inside ngAfterViewChecked and message is ' + this.messagefromparent
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside ngOnChanges and order is ' + this.messagefromparent);
  }
}
