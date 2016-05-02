import { Component } from 'angular2/core' ;
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router' ;

import { AComponent } from './a.component';
import { BComponent } from './b.component' ;

@Component({
  selector : 'parent-component',
  templateUrl : './app/components/parent.component.html',
  styleUrls : [ './app/components/parent.component.css' ],
  directives : [
    ROUTER_DIRECTIVES,
    AComponent,
    BComponent
  ]
})

@RouteConfig([
  {
    path : '/',
    name : 'MainChild',
    component : AComponent,
    useAsDefault : true
  },
  {
    path : '/sibling_route',
    name : 'SecondChild',
    component : BComponent
  }
])

export class ParentComponent {

}
