import {Component, OnInit, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {NavigationComponent} from '../navigation/navigation.component';
import {PageService} from 'app/services/page.service';
import {IPageModel} from 'app/models/page.model';
import {AuthService} from '../../services/auth.service';
import {TranslateService, LangChangeEvent} from 'ng2-translate/ng2-translate';



@Component({
  selector: 'page-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  styles: [require('./page.component.scss').toString()],
  template: require('./page.component.html')
})
export class PageComponent implements OnInit {

  private pageModel: IPageModel;
  pageKey: string;
  markdownContent: string;
  htmlContent: string;
  onLangChange: EventEmitter<LangChangeEvent>;


  /**
   * Nastavuje 
   * @param routeParams
   * @param pageService
   * @param auth
   * @param translate
   */
  constructor(private routeParams: RouteParams, private pageService: PageService,
              private auth: AuthService, private translate: TranslateService) {

  }



  /**
   * Při inicializaci komponenty pro zobrazování stránky:
   *   - zjistíme klíč zobrazované stránky
   *   - danou stránku zkusíme najít pomocí PageService
   *   - v případě změny jazyka zkusíme přesměrovat na danou jazykovou verzi
   *     stránky
   */
  ngOnInit(): any {
    var key = this.routeParams.get('key');
    this.pageService.findPage(key).then((pageModel) => this.page = pageModel);
    
    // zkusím eto přesměrovat na jinou jazykovou verzi
    this.onLangChange = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('Lang change - změn stránku', event);
    });
  }



  private onPageLoaded() {
    this.pageKey = this.pageModel.getKey();
    this.markdownContent = this.pageModel.getMarkdown();
    this.htmlContent = this.pageModel.getHtml();
  }



  set page(value: IPageModel) {
    this.pageModel = value;
    this.onPageLoaded();
  }



  get pageMarkdown(): string {
    return this.markdownContent;
  }



  set pageMarkdown(value: string) {
    this.pageModel.setMarkdown(value);
    this.markdownContent = value;
    this.htmlContent = this.pageModel.getHtml();
  }



  get pageHtml(): string {
    return this.htmlContent;
  }


  set pageHtml(value: string) {
    this.htmlContent = value;
  }


  onSaveClicked(): void {
    this.pageModel.save()
  }

}
