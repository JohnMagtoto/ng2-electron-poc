//boot.ts
import {enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router' ;
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

// enableProdMode();
// bootstrap(AppComponent, [
//     ROUTER_PROVIDERS,
//     provide(LocationStrategy,
//            {useClass: HashLocationStrategy}) // .../#/crisis-center/
//   ]);

bootstrap(AppComponent) ;
