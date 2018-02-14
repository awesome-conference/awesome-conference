import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'awc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  public loginWithCredentials() {
    this.afAuth.auth.signInWithEmailAndPassword(this.form.value.username, this.form.value.password).then(status => {
      console.log(status);
    });
  }

  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(status => {
      console.log(status);
    });
  }
}
