import { NgModule } from '@angular/core';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [
    SharedMaterialModule,
  ],
  providers: [
    MessagesService,
  ]
})
export class SharedModule { }
