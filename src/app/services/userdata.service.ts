import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'Anil', age:22, email:'anil@test.com'},
      {name:'Shubham', age:23, email:'shubham@test.com'},
      {name:'Sagar', age:22, email:'sagar@test.com'},
      {name:'Vishnu', age:22, email:'vishnu@test.com'},
    ];
  }
}
