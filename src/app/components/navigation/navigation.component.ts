import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Input} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'navigation-component',
  directives: [ROUTER_DIRECTIVES],
  template: require('./navigation.component.html'),
  styles: [ require('./navigation.component.scss') ]
})
export class NavigationComponent implements OnInit {

  @Input() type: string = 'normal';


  ngOnInit(): any {

  }

}
