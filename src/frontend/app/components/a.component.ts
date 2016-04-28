import { Component, OnInit } from 'angular2/core' ;

@Component({
  selector : 'a-compoent',
  template : `
  <div>{{aMessage}}</div>
  <ul>
    <li *ngFor="#num of someNumArray">{{num}}</li>
  </ul>
  `
})

export class AComponent implements OnInit{
  aMessage : String = "Message from component A" ;
  someNumArray : String[] ;

  ngOnInit(){
    this.someNumArray = [
      "1",
      "2",
      "3"
    ]
  }
}
