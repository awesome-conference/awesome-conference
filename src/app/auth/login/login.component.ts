import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { MessagesService } from '../../shared/messages.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public isLoginPending: boolean;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

  public login(loginWay: 'google' | 'credentials') {
    this.isLoginPending = true;

    let loginCall: Promise<User>;
    if (loginWay === 'google') {
      loginCall = this.loginWithGoogle();
    } else if (loginWay === 'credentials') {
      if (!this.form.valid) {
        return;
      }

      loginCall = this.loginWithCredentials();
    }

    return loginCall
      .then((user: User) => {
        this.goToHome();
        this.isLoginPending = false;
        this.messagesService.showSnackBar(`Welcome, ${user.email}`);
      }).catch(error => {
        this.isLoginPending = false;
        this.messagesService.showSnackBar(error.message, 4000);
      });
  }

  public loginWithCredentials(): Promise<User> {
    return this.afAuth.auth.signInWithEmailAndPassword(this.form.value.email, this.form.value.password)
      .then(user => user);
  }

  public loginWithGoogle(): Promise<User> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(status => status.user);
  }
}
