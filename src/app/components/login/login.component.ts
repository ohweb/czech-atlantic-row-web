import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, CanActivate} from 'angular2/router';
import {NavigationComponent} from 'app/components/navigation/navigation.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login-component',
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  template: require('./login.component.html'),
  styles: [require('./login.component.scss').toString()]
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) {
  }


  signIn(): void {
    this.auth.signIn().then(()=>this.redirectHome());
  }

  signOut(): void {
    this.auth.signOut();
    this.redirectHome();
  }

  redirectHome(): void {
    this.router.navigate(['/Home']);
  }

}
