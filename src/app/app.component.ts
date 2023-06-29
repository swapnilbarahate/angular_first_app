import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  name = 'Swapnil Barahate';
  getName() {
    return this.name;
  };
  obj = {
    name: "dhiraj",
    age: 23
  }
  fruits = ["mango", "banana", "gawa", "pinapple", "apple", "pomogranet", "orange"];

  siteUrl = window.location.href;
 disableBox=true;
  enableBox() {
    this.disableBox= false;
  }
  users:any;
  constructor(private userdata:UserdataService){
    console.log("userdata",userdata.users());
    this.users=userdata.users();
  }

}
