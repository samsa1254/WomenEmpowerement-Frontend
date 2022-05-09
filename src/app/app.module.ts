import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EventsComponent } from './Pages/events/events.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './Pages/user/user.component';
import { AdduserComponent } from './Pages/adduser/adduser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateuserComponent } from './Pages/updateuser/updateuser.component';
import { LoginComponent } from './Pages/login/login.component';
import { authInterceptorProviders } from './Helpers/AuthInterceptor';
import { ProfileComponent } from './Pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    EventsComponent,
    AcceuilComponent,
    UserComponent,
    AdduserComponent,
    UpdateuserComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
