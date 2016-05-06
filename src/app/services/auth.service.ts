import {EventEmitter, Injectable} from 'angular2/core';
import {FirebaseService} from './firebase.service';


@Injectable()
export class AuthService {
  private ref: Firebase;
  private authData: FirebaseAuthData;
  private emitter: EventEmitter<any> = new EventEmitter();

  private users: Array<string> = ['google:110451814841359814712'];

  constructor(firebaseService: FirebaseService) {
    this.ref = firebaseService.getFirebase();
    this.authData = this.ref.getAuth();

    this.ref.onAuth((authData: FirebaseAuthData) => {
      this.authData = authData;
      this.emit();
    });
  }

  get authenticated(): boolean {
    // console.log(this.authData.uid);
    return this.authData !== null && !this.expired && this.isKnownUser(this.authData.uid);
  }

  get expired(): boolean {
    return !this.authData || (this.authData.expires * 1000) < Date.now();
  }

  get id(): string {
    return this.authenticated ? this.authData.uid : '';
  }

  signIn(): Promise<any> {
    return this.authWithOAuth('google');
  }

  signOut(): void {
    this.ref.unauth();
  }


  authWithOAuth(provider: string): Promise<any> {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.ref.authWithOAuthPopup(provider, (error: Error) => {
        if (error) {
          console.error('Auth Service - ' + ' Nepodařilo se přihlásit : ', error);
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  private emit(): void {
    this.emitter.next(this.authenticated);
  }


  /**
   * Kontroluje zda je daný uživatel v poli známých uživatelů.
   *
   * @param {string} who
   * @returns {boolean}
   */
  private isKnownUser(who: string): boolean {
    return this.users.indexOf(who) > -1;
  }
}
