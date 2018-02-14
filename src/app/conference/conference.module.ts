import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceMaterialModule } from '../conference-material/conference-material.module';
import { ConferenceService } from './services/conference.service';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { ConferenceCardComponent } from './components/conference-card/conference-card.component';
import { ConferenceDetailComponent } from './components/conference-detail/conference-detail.component';


const routes: Routes = [
  {
    path: ':slug',
    component: ConferenceDetailComponent,
  },
  {
    path: '',
    component: ConferencesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ConferenceMaterialModule,
  ],
  exports: [
    RouterModule,
    ConferencesComponent,
  ],
  declarations: [
    ConferencesComponent,
    ConferenceCardComponent,
    ConferenceDetailComponent,
  ],
  providers: [ConferenceService],
})
export class ConferenceModule { }
