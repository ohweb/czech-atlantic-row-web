import * as marked from 'marked';
import {Injectable} from 'angular2/core';



@Injectable()
export class MarkdownService {



  private md: MarkedStatic;



  constructor() {
    this.md = marked;
  }



  /**
   *
   * @param {string} value
   * @returns {string}
   */
  public convert(value: string): string {
    return this.md.parse(value);
  }

}