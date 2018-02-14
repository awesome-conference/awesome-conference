import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'conferences',
    loadChildren: 'app/conference/conference.module#ConferenceModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
