import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'login-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  templateUrl: require('./login.component.html')
})
export class LoginComponent {

  constructor() {}

}
