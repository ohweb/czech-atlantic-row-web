import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'blog-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  pipes: [TranslatePipe],
  template: require('./blog.component.html')
})
export class BlogComponent {

  constructor() {}
  
}
