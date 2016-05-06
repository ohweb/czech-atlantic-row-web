import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'home-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  template: require('./home.component.html'),
  styles: [ require('./home.component.scss').toString() ]
})
export class HomeComponent {

  constructor() {
  }

}
