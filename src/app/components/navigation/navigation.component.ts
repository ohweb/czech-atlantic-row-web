import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Input} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {NavigationStarComponent} from './navigation-star/navigation-star.component';



@Component({
  selector: 'navigation-component',
  directives: [ROUTER_DIRECTIVES, NavigationStarComponent],
  pipes: [TranslatePipe],
  template: require('./navigation.component.html'),
  styles: [require('./navigation.component.scss').toString()]
})
export class NavigationComponent implements OnInit {

  @Input()
  type: string = 'normal';



  constructor(private translationService: TranslateService) {
  }



  ngOnInit(): any {
  }



  changeLanguage(newLanguage: string): void {
    console.log(newLanguage);
    this.translationService.use(newLanguage);
  }



}
