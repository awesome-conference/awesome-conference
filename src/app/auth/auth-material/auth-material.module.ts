import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  declarations: []
})
export class AuthMaterialModule { }
