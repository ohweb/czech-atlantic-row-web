import {AuthService} from 'app/services/auth.service';
import {IPageModel, PageModel} from 'app/models/page.model';
import {Injectable} from 'angular2/core';
import {FirebaseService} from 'app/services/firebase.service';



@Injectable()
export class PageService {



  firebasePages: Firebase;



  constructor(firebaseService: FirebaseService, private auth: AuthService) {
    this.firebasePages = firebaseService.getPagesRef();
  }



  public findPage(key: string): Promise<IPageModel> {
    var pageRef = this.firebasePages.child(key);
    var self = this;
    return pageRef.once('value').then(function (snapshot) {
      return new PageModel(key, snapshot.val(), self);
    });
  }



  public updatePage(key: string, content: string): Promise<any> {
    if (this.auth.authenticated) {
      return Promise.resolve(
        this.firebasePages.child(key).set(content)
      );
    } else {
      console.log('Not authorised to do that.');
    }
  }

}