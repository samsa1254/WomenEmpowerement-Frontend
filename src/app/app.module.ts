import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AddAvailabilityComponent } from './Pages/Availabilities/add-availability/add-availability.component';
import { AvailabilityListComponent } from './Pages/Availabilities/availability-list/availability-list.component';
import { AddReportComponent } from './Pages/Reports/add-report/add-report.component';
import { ReportListComponent } from './Pages/Reports/report-list/report-list.component';
import { UpdateReportComponent } from './Pages/Reports/update-report/update-report.component';
import { UpdateAvailablityComponent } from './update-availablity/update-availablity.component';
import { TreatrepbyblockingComponent } from './Pages/Reports/treatrepbyblocking/treatrepbyblocking.component';
import { TreatrepbyunblockingComponent } from './Pages/Reports/treatrepbyunblocking/treatrepbyunblocking.component';
import { UserreportsComponent } from './Pages/Reports/userreports/userreports.component';
import {NgxPaginationModule} from 'ngx-pagination';

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
    AddAvailabilityComponent,
    AvailabilityListComponent,
    AddReportComponent,
    ReportListComponent,
    UpdateReportComponent,
    UpdateAvailablityComponent,
    TreatrepbyblockingComponent,
    TreatrepbyunblockingComponent,
    UserreportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
