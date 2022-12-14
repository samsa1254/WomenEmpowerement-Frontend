import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EventsComponent } from './Pages/events/events.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';

import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserComponent } from './Pages/user/user.component';
import { AdduserComponent } from './Pages/adduser/adduser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateuserComponent } from './Pages/updateuser/updateuser.component';
import { LoginComponent } from './Pages/login/login.component';
import { authInterceptor } from './Helpers/AuthInterceptor';
import { ProfileComponent } from './Pages/profile/profile.component';

import { AddEventComponent } from './Pages/events/add-event/add-event.component';
import { EventDatailsComponent } from './Pages/events/event-datails/event-datails.component';
import { EventModifyComponent } from './Pages/events/event-modify/event-modify.component';
import { AddOfferComponent } from './Pages/offer-list/add-offer/add-offer.component';
import { UpdateOfferComponent } from './Pages/offer-list/update-offer/update-offer.component';
import { OfferListComponent } from './Pages/offer-list/offer-list.component';
import { OfferDetailsComponent } from './Pages/offer-list/offer-details/offer-details.component';
import { CandidacyComponentComponent } from './Pages/candidacy-list/candidacy-component/candidacy-component.component';
import { CandidacyUpdateComponent } from './Pages/candidacy-list/candidacy-update/candidacy-update.component';


import { CreatepostComponent } from './Pages/acceuil/createpost/createpost.component';
import { UpdatepostComponent } from './Pages/acceuil/updatepost/updatepost.component';

import { CagnottesComponent } from './Pages/cagnottes/cagnottes.component';
import { AddCagnotteComponent } from './Pages/cagnottes/add-cagnotte/add-cagnotte.component';
import { DetailsCagnottesComponent } from './Pages/cagnottes/details-cagnottes/details-cagnottes.component';

import { RegisterComponent } from './Pages/register/register.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { PaiementComponent } from './Pages/paiement/paiement.component';
import { StripeComponent } from './Pages/paiement/stripe/stripe.component';
import { AffectationComponent } from './Pages/events/affectation/affectation.component';
import { CreateCardComponent } from './Pages/paiement/create-card/create-card.component';
import { SendMailComponent } from './Pages/events/send-mail/send-mail.component';


import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    AddEventComponent,
    EventDatailsComponent,
    EventModifyComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    OfferListComponent,
    OfferDetailsComponent,

    CandidacyComponentComponent,
    CandidacyUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

    EventsComponent,



    AcceuilComponent,
    CreatepostComponent,
    UpdatepostComponent,

    CagnottesComponent,
    AddCagnotteComponent,
    DetailsCagnottesComponent,
    PaiementComponent,
    StripeComponent,
    AffectationComponent,
    CreateCardComponent,
    SendMailComponent,

    UserComponent,
    AdduserComponent,
    UpdateuserComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LogoutComponent,

  ],

    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        NgxPaginationModule

    ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:authInterceptor, multi:true


    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
