import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';
import {AcceuilComponent} from "./Pages/acceuil/acceuil.component";
import { AddOfferComponent } from './Pages/offer-list/add-offer/add-offer.component';
import { UpdateOfferComponent } from './Pages/offer-list/update-offer/update-offer.component';
import { OfferListComponent } from './Pages/offer-list/offer-list.component';
import { OfferDetailsComponent } from './Pages/offer-list/offer-details/offer-details.component';
import { AddEventComponent } from './Pages/events/add-event/add-event.component';
import { EventDatailsComponent } from './Pages/events/event-datails/event-datails.component';
import { EventModifyComponent } from './Pages/events/event-modify/event-modify.component';
import { CagnottesComponent } from './Pages/cagnottes/cagnottes.component';
import { AddCagnotteComponent } from './Pages/cagnottes/add-cagnotte/add-cagnotte.component';
import { DetailsCagnottesComponent } from './Pages/cagnottes/details-cagnottes/details-cagnottes.component';
import { StripeComponent } from './Pages/paiement/stripe/stripe.component';
import { PaiementComponent } from './Pages/paiement/paiement.component';
import { AffectationComponent } from './Pages/events/affectation/affectation.component';
import { CreateCardComponent } from './Pages/paiement/create-card/create-card.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { SendMailComponent } from './Pages/events/send-mail/send-mail.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'events', component: EventsComponent },
      { path: 'addEvent', component: AddEventComponent},
      { path: 'detailsEvent/:id', component: EventDatailsComponent},
      { path: 'updateEvent/:id', component: EventModifyComponent},
      { path: 'Affectation/:id', component:AffectationComponent },
      { path: 'SendMail/:id', component:SendMailComponent },

      { path: 'cagnottes', component: CagnottesComponent },
      { path: 'addcagnotte', component: AddCagnotteComponent},
      { path: 'detailscagnotte/:id', component: DetailsCagnottesComponent},

      { path: 'CreateCustomer', component: StripeComponent },
      { path: 'CreateCard', component: CreateCardComponent},
      { path: 'Paiement', component: PaiementComponent},



      { path: 'addoffer', component: AddOfferComponent},
      { path: 'Offer', component: OfferListComponent},
      { path: 'updateoffer/:id', component: UpdateOfferComponent},
      { path: 'detailsoffer/:id', component: OfferDetailsComponent},
      

      { path: 'acceuil', component: AcceuilComponent },
      ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
