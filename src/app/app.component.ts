import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public authState$: Observable<User | null>;

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit() {
    this.authState$ = this.authService.currentUser$;
  }

  public signOut() {
    this.authService.signOut();
  }
}
