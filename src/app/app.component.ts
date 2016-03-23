import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components/home/home.component';
import {PageComponent} from './components/page/page.component';
import {BlogComponent} from './components/blog/blog.component';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'czech-atlantic-row-web',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.component.html')
})
@RouteConfig([
  new Route({
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }),
  new Route({
    path: '/:klic',
    name: 'Page',
    component: PageComponent
  }),
  new Route({
    path: '/blog',
    name: 'Blog',
    component: BlogComponent
  }),
  new Route({
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }),
])
export class AppComponent {
  
  constructor(){}
}