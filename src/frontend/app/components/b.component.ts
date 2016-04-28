import { Component, OnInit } from 'angular2/core' ;

@Component({
  selector : 'b-component',
  template : `
  <div>{{bMessage}}</div>
  <ol>
    <li *ngFor="#char of someCharArray">{{char}}</li>
  </ol>
  <div *ngIf="bCondition">Actual bCondition was true</div>
  <div *ngIf="someCharArray > 3">You are screwed if this shows</div>
  `
})

export class BComponent implements OnInit {
  bMessage : String = "Message from B Component" ;
  someCharArray : String[] ;
  bCondition : boolean ;

  ngOnInit(){
    this.someCharArray = [
      "a",
      "b",
      "c"
    ] ;
    this.bCondition = 1 === 1 ;
  }
}
