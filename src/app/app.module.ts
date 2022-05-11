import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AddEventComponent } from './Pages/events/add-event/add-event.component'; 
import { EventDatailsComponent } from './Pages/events/event-datails/event-datails.component';
import { EventModifyComponent } from './Pages/events/event-modify/event-modify.component';
import { AddOfferComponent } from './Pages/offer-list/add-offer/add-offer.component';
import { UpdateOfferComponent } from './Pages/offer-list/update-offer/update-offer.component';
import { OfferListComponent } from './Pages/offer-list/offer-list.component';
import { OfferDetailsComponent } from './Pages/offer-list/offer-details/offer-details.component';
import { CagnottesComponent } from './Pages/cagnottes/cagnottes.component';
import { AddCagnotteComponent } from './Pages/cagnottes/add-cagnotte/add-cagnotte.component';
import { DetailsCagnottesComponent } from './Pages/cagnottes/details-cagnottes/details-cagnottes.component';
import { PaiementComponent } from './Pages/paiement/paiement.component';
import { StripeComponent } from './Pages/paiement/stripe/stripe.component';
import { AffectationComponent } from './Pages/events/affectation/affectation.component';
import { CreateCardComponent } from './Pages/paiement/create-card/create-card.component';
import { SendMailComponent } from './Pages/events/send-mail/send-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    EventsComponent,
    AcceuilComponent,
    AddEventComponent,
    EventDatailsComponent,
    EventModifyComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    OfferListComponent,
    OfferDetailsComponent,
    CagnottesComponent,
    AddCagnotteComponent,
    DetailsCagnottesComponent,
    PaiementComponent,
    StripeComponent,
    AffectationComponent,
    CreateCardComponent,
    SendMailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
