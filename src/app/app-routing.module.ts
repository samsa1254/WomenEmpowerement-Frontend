import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';
import {AcceuilComponent} from "./Pages/acceuil/acceuil.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'events', component: EventsComponent } ,
      {path: 'acceuil', component: AcceuilComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
