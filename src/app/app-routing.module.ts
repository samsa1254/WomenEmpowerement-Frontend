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
import { AddAvailabilityComponent } from './Pages/Availabilities/add-availability/add-availability.component';
import {AvailabilityListComponent}  from './Pages/Availabilities/availability-list/availability-list.component';
import { ReportListComponent } from './Pages/Reports/report-list/report-list.component';
import { AddReportComponent } from './Pages/Reports/add-report/add-report.component';
import { TreatrepbyblockingComponent } from './Pages/Reports/treatrepbyblocking/treatrepbyblocking.component';
import { TreatrepbyunblockingComponent } from './Pages/Reports/treatrepbyunblocking/treatrepbyunblocking.component';
import { UserreportsComponent } from './Pages/Reports/userreports/userreports.component';
import { UpdateReportComponent } from './Pages/Reports/update-report/update-report.component';




const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'events', component: EventsComponent },
      { path: 'addEvent', component: AddEventComponent},
      { path: 'detailsEvent/:id', component: EventDatailsComponent},
      { path: 'updateEvent/:id', component: EventModifyComponent},

      { path: 'addoffer', component: AddOfferComponent},
      { path: 'Offer', component: OfferListComponent},
      { path: 'updateoffer/:id', component: UpdateOfferComponent},
      { path: 'detailsoffer/:id', component: OfferDetailsComponent},      
      { path: 'Availibility/add-disp', component: AddAvailabilityComponent},
      { path: 'Report/retrieve-all-reps', component: ReportListComponent},
      { path: 'Report/add-rep', component: AddReportComponent},
      { path: 'Report/treatbyblockinguser/:id', component: TreatrepbyblockingComponent },
      { path: 'Report/treatbyunblockinguser/:id', component: TreatrepbyunblockingComponent },
      { path: 'Report/myreports', component: UserreportsComponent },
      { path: 'Report/AddReport', component: AddReportComponent },
      { path: 'Report/updateReport', component: UpdateReportComponent },


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
