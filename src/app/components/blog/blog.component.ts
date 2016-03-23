import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'blog-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  template: require('./blog.component.html')
})
export class BlogComponent {

  constructor() {}
  
}
