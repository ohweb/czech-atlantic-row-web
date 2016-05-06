import {Injectable} from 'angular2/core';

// TODO: GET'EM OUTTA HERE!
const FIREBASE_URL: string = 'https://czech-atlantic-row.firebaseio.com';
const PAGES_CHILD: string = 'pages';
const POSTS_CHILD: string = 'posts';
const USERS_CHILD: string = 'users';

@Injectable()
export class FirebaseService {


  private firebaseRef;


  constructor() {
    this.firebaseRef = new Firebase(FIREBASE_URL);
  }


  getFirebase(): Firebase {
    return this.firebaseRef;
  }

  getPagesRef(): Firebase {
    return this.firebaseRef.child(PAGES_CHILD);
  }

  getPostsRef(): Firebase {
    return this.firebaseRef.child(POSTS_CHILD);
  }

  getUsersRef(): Firebase {
    return this.firebaseRef.child(USERS_CHILD);
  }
}
