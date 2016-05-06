import {PageService} from 'app/services/page.service';
import {MarkdownService} from 'app/services/markdown.service';


export interface IPageModel {
  getKey(): string;
  getHtml(): string;
  getMarkdown(): string;
  setMarkdown(value: string): void;
  save(): void;
}



export class PageModel implements IPageModel {

  private markdownService : MarkdownService;


  /**
   *
   * @param {string} key
   * @param {string} content
   * @param {PageService} pageService
   */
  constructor(private key: string, private content: string, private pageService: PageService) {
    this.markdownService = new MarkdownService();
  }



  /**
   *
   * @returns {string}
   */
  public getKey(): string {
    return this.key;
  }



  /**
   *
   * @returns {string}
   */
  public getMarkdown() {
    return this.content;
  }



  /**
   *
   * @param {string} value
   */
  public setMarkdown(value: string) {
    this.content = value;
  }



  /**
   *
   * @returns {string}
   */
  public getHtml(): string {
    return this.markdownService.convert(this.content);
  }



  /**
   * Pošle aktuální verzi stránky do DB
   */
  public save(): void {
    this.pageService.updatePage(this.key, this.content);
  }

}