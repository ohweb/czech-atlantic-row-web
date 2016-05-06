import {Component} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AUTH_PROVIDERS} from 'app/providers/auth.providers';
import {CONTENT_PROVIDERS} from 'app/providers/content.providers';
import {FirebaseService} from './services/firebase.service';

import {HomeComponent} from './components/home/home.component';
import {PageComponent} from './components/page/page.component';
import {BlogComponent} from './components/blog/blog.component';
import {LoginComponent} from './components/login/login.component';
import {TranslateService} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'czech-atlantic-row-web',
  directives: [ROUTER_DIRECTIVES],
  providers: [FirebaseService, AUTH_PROVIDERS, CONTENT_PROVIDERS],
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
    path: '/:key',
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

  constructor(translate: TranslateService) {
    var userLang = navigator.language.split('-')[0];
    userLang = /(cs|en)/gi.test(userLang) ? userLang : 'cs';

    // jazyk, který se použije pokud nebude jazyk automaticky detekován
    translate.setDefaultLang('cs');

    translate.use(userLang);
  }
  
}