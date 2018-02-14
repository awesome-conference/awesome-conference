import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessagesService {

  private defaultSnackBarDuration = 1500;

  constructor(public snackBar: MatSnackBar) {}

  public showSnackBar(message: string, duration = this.defaultSnackBarDuration) {
    this.snackBar.open(message, null, {
      duration: duration,
    });
  }
}
