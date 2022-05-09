import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

=======
import { FormsModule } from '@angular/forms';
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EventsComponent } from './Pages/events/events.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import {HttpClientModule} from "@angular/common/http";
<<<<<<< HEAD
import { UserComponent } from './Pages/user/user.component';
import { AdduserComponent } from './Pages/adduser/adduser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateuserComponent } from './Pages/updateuser/updateuser.component';
import { LoginComponent } from './Pages/login/login.component';
import { authInterceptorProviders } from './Helpers/AuthInterceptor';
import { ProfileComponent } from './Pages/profile/profile.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './Pages/events/add-event/add-event.component'; 
import { EventDatailsComponent } from './Pages/events/event-datails/event-datails.component';
import { EventModifyComponent } from './Pages/events/event-modify/event-modify.component';
import { AddOfferComponent } from './Pages/offer-list/add-offer/add-offer.component';
import { UpdateOfferComponent } from './Pages/offer-list/update-offer/update-offer.component';
import { OfferListComponent } from './Pages/offer-list/offer-list.component';
import { OfferDetailsComponent } from './Pages/offer-list/offer-details/offer-details.component';

import { CreatepostComponent } from './Pages/acceuil/createpost/createpost.component';
import { UpdatepostComponent } from './Pages/acceuil/updatepost/updatepost.component';

import { CagnottesComponent } from './Pages/cagnottes/cagnottes.component';
import { AddCagnotteComponent } from './Pages/cagnottes/add-cagnotte/add-cagnotte.component';
import { DetailsCagnottesComponent } from './Pages/cagnottes/details-cagnottes/details-cagnottes.component';
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    EventsComponent,
    AcceuilComponent,
<<<<<<< HEAD
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
=======
    AddEventComponent,
    EventDatailsComponent,
    EventModifyComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    OfferListComponent,
    OfferDetailsComponent,

    CreatepostComponent,
    UpdatepostComponent,

    CagnottesComponent,
    AddCagnotteComponent,
    DetailsCagnottesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
  bootstrap: [AppComponent]
})
export class AppModule { }
