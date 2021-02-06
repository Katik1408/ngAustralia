import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  //name: string;
  name = 'Something';
  place = 'Delhi'
  getValue(){
     return  this.place = 'Bangalore';
  }

  showData(){
    console.log('It is working');
  }


}

//tilde
//Interpolation