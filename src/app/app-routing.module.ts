import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';
import {AcceuilComponent} from "./Pages/acceuil/acceuil.component";
import {UserComponent} from "./Pages/user/user.component";
import {AdduserComponent} from "./Pages/adduser/adduser.component";
import {UpdateuserComponent} from "./Pages/updateuser/updateuser.component";
import {LoginComponent} from "./Pages/login/login.component";
import {ProfileComponent} from "./Pages/profile/profile.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'events', component: EventsComponent } ,
      {path: 'acceuil', component: AcceuilComponent } ,
      {path:'profile',component:ProfileComponent},
      {path: 'user', component: UserComponent , children:[{path:'adduser',component:AdduserComponent},{path:'updateuser/:iduser',component:UpdateuserComponent}] }],

},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
