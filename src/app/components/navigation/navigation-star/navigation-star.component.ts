import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {NgClass} from 'angular2/common';



@Component({
  selector: 'navigation-star-component',
  directives: [ROUTER_DIRECTIVES, NgClass],
  pipes: [TranslatePipe],
  template: require('./navigation-star.component.html'),
  styles: [require('./navigation-star.component.scss').toString()]
})
export class NavigationStarComponent {


  @Input()
  linkKey: string;
  
  isHover: boolean = false;


  constructor(private translationService: TranslateService) {
  }

  onMouseOver(element: HTMLElement, star: HTMLElement, label: HTMLElement): void {
    this.isHover = true;
  }
  onMouseLeave(element: HTMLElement, star: HTMLElement, label: HTMLElement): void {
    this.isHover = false;
  }
}