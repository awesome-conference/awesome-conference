import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import 'rxjs/add/operator/do';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public authState$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
  ) { }

  public ngOnInit() {
    this.authState$ = this.authService.currentUser$;
  }

  public signOut() {
    this.afAuth.auth.signOut();
  }
}
