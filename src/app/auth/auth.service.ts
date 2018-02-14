import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { MessagesService } from '../shared/messages.service';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private messagesService: MessagesService,
  ) { }

  public currentUser$ = this.afAuth.authState;

  public signOut() {
    this.afAuth.auth.signOut().then(() => this.messagesService.showSnackBar('Successfully logged out.'));
  }
}
