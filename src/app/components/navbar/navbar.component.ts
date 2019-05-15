import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => console.log('Log out!'));
  }
}
