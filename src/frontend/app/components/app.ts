//app.ts
import { Component } from 'angular2/core' ;
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router' ;

import { ParentComponent } from './parent.component' ;
import { AComponent } from './a.component';
import { BComponent } from './b.component' ;

// import { Location } from 'angular2/platform/common' ;

@Component({
  selector: 'ng2-electron-app',
  template: `
  <h3>{{caption}}</h3>
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    ParentComponent
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})

// @RouteConfig([
//   {
//     path : '/aa',
//     name : 'A',
//     component : AComponent,
//     useAsDefault : true
//   },
//   {
//     path : '/bb',
//     name : 'B',
//     component : BComponent
//   }
// ])

@RouteConfig([
  {
    path : '/...',
    name :  'Parent',
    component : ParentComponent,
    useAsDefault : true
  }
])

export class AppComponent{
  private caption: string = "Hello from ng2." ;

}
