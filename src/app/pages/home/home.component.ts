import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data= "hello world";
  public color= "text-primary";
  public data1= true;
  public data2= [
    {
      name: 'aaaaa',
      id: 1,
    },
    {
      name: 'bbbbb',
      id:2,
    },
    {
      name: 'ccccc',
      id:3,
    },
    {
      name: 'ddddd',
      id:4,
    },
    {
      name: 'eeeee',
    id:5,
  },
  

  ]

  public constructor() {
    this.fun1();
  }
  public fun1() {
    alert('fun1');
  }
  public fun2() {
    alert('fun2');
  }

}

