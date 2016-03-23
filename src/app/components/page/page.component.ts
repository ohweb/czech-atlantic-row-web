import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'page-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  template: require('./page.component.html')
})
export class PageComponent implements OnInit {

  public klic: string = 'default';

  constructor(private _routeParams: RouteParams) {
  }

  ngOnInit(): any {
    this.klic = this._routeParams.get('klic');
  }
}
