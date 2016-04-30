import { Component } from 'angular2/core' ;
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router' ;

import { AComponent } from './a.component';
import { BComponent } from './b.component' ;

@Component({
  selector : 'parent-component',
  template : `
  <div>This is ParentComponent</div>
  <nav>
    <a [routerLink]="['MainChild']">A Component</a>
    <a [routerLink]="['SecondChild']">B Component</a>
  </nav>
  <router-outlet></router-outlet>
  `,
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
