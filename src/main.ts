import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';

import {AppComponent} from './app/app.component';


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy})
])
  .catch(err => console.error(err));