import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule,
  ],
  exports: [
    MatSnackBarModule,
  ],
  declarations: []
})
export class SharedMaterialModule { }
