import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [
    MatCardModule,
    MatProgressBarModule,
  ],
  declarations: []
})
export class ConferenceMaterialModule { }
