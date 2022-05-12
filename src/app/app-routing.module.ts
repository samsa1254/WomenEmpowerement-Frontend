import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';

import { AcceuilComponent } from "./Pages/acceuil/acceuil.component";

import {UserComponent} from "./Pages/user/user.component";
import {AdduserComponent} from "./Pages/adduser/adduser.component";
import {UpdateuserComponent} from "./Pages/updateuser/updateuser.component";
import {LoginComponent} from "./Pages/login/login.component";
import {ProfileComponent} from "./Pages/profile/profile.component";

import { AddOfferComponent } from './Pages/offer-list/add-offer/add-offer.component';
import { UpdateOfferComponent } from './Pages/offer-list/update-offer/update-offer.component';
import { OfferListComponent } from './Pages/offer-list/offer-list.component';
import { OfferDetailsComponent } from './Pages/offer-list/offer-details/offer-details.component';
import { AddEventComponent } from './Pages/events/add-event/add-event.component';
import { EventDatailsComponent } from './Pages/events/event-datails/event-datails.component';
import { EventModifyComponent } from './Pages/events/event-modify/event-modify.component';
import { CandidacyComponentComponent } from './Pages/candidacy-list/candidacy-component/candidacy-component.component'
import { CandidacyUpdateComponent } from './Pages/candidacy-list/candidacy-update/candidacy-update.component';



import {CreatepostComponent} from "./Pages/acceuil/createpost/createpost.component";
import {UpdatepostComponent} from "./Pages/acceuil/updatepost/updatepost.component";

import { CagnottesComponent } from './Pages/cagnottes/cagnottes.component';
import { AddCagnotteComponent } from './Pages/cagnottes/add-cagnotte/add-cagnotte.component';
import { DetailsCagnottesComponent } from './Pages/cagnottes/details-cagnottes/details-cagnottes.component';
import { StripeComponent } from './Pages/paiement/stripe/stripe.component';
import { PaiementComponent } from './Pages/paiement/paiement.component';
import { AffectationComponent } from './Pages/events/affectation/affectation.component';
import { CreateCardComponent } from './Pages/paiement/create-card/create-card.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { SendMailComponent } from './Pages/events/send-mail/send-mail.component';

import {LogoutComponent} from "./Pages/logout/logout.component";
import {RegisterComponent} from "./Pages/register/register.component";
import {AddAvailabilityComponent} from "./Pages/Availabilities/add-availability/add-availability.component";
import {AddReportComponent} from "./Pages/Reports/add-report/add-report.component";
import {TreatrepbyblockingComponent} from "./Pages/Reports/treatrepbyblocking/treatrepbyblocking.component";
import {UserreportsComponent} from "./Pages/Reports/userreports/userreports.component";
import {UpdateReportComponent} from "./Pages/Reports/update-report/update-report.component";
import {ReportListComponent} from "./Pages/Reports/report-list/report-list.component";
import {TreatrepbyunblockingComponent} from "./Pages/Reports/treatrepbyunblocking/treatrepbyunblocking.component";
import {AvailabilityListComponent} from "./Pages/Availabilities/availability-list/availability-list.component";
import {ForgetpassComponent} from "./Pages/forgetpass/forgetpass.component";


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,

    children: [
      { path: 'events', component: EventsComponent },
      { path: 'addEvent', component: AddEventComponent},
      { path: 'detailsEvent/:id', component: EventDatailsComponent},
      { path: 'updateEvent/:id', component: EventModifyComponent},

      { path: 'candidacy', component: CandidacyComponentComponent},
      { path: 'updatecandidacy/:id', component: CandidacyUpdateComponent},

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
      { path :'createpost' , component: CreatepostComponent},
      { path:'updatepost/:idPublication' , component: UpdatepostComponent},

      { path: 'Availibility/retrieve-all-disps', component: AvailabilityListComponent},
      { path: 'Availibility/add-disp', component: AddAvailabilityComponent},
      { path: 'Report/retrieve-all-reps', component: ReportListComponent},
      { path: 'Report/add-rep', component: AddReportComponent},
      { path: 'Report/treatbyblockinguser/:id', component: TreatrepbyblockingComponent },
      { path: 'Report/treatbyunblockinguser/:id', component: TreatrepbyunblockingComponent },
      { path: 'Report/myreports/:id', component: UserreportsComponent },
      { path: 'Report/AddReport', component: AddReportComponent },
      { path: 'Report/updateReport', component: UpdateReportComponent },

      {path:'logout',component:LogoutComponent},
      {path:'profile',component:ProfileComponent},
      {path: 'user', component: UserComponent , children:[{path:'adduser',component:AdduserComponent},{path:'updateuser/:iduser',component:UpdateuserComponent}] }



      ],



  },
  {path:"register", component:RegisterComponent},
  {path:"forgetpass", component:ForgetpassComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
