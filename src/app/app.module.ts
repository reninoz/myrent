import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// import { DateValueAccessorModule } from 'angular-date-value-accessor';
// import { MyDatePickerModule } from 'mydatepicker';
// import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';

// import {CalendarModule, SharedModule} from 'primeng/primeng';

// import { DateValueAccessorModule } from 'angular-date-value-accessor';
// import { DateValueAccessor } from 'angular-date-value-accessor/date-value-accessor';

// import { CalendarModule } from 'angular-calendar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { RentPropertyListComponent } from './properties/rent-property-list/rent-property-list.component';
import { SharePropertyListComponent } from './properties/share-property-list/share-property-list.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PagerService } from './services/pager.service';

import { PersonService } from './services/person.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  
    PropertyListComponent,
    RentPropertyListComponent,
    SharePropertyListComponent,
  ],
  imports: [
    BrowserModule,
  //  DateValueAccessorModule,
    HttpModule,
    // SharedModule,
    // CalendarModule,
    //  CalendarModule.forRoot(),
    // MdDatepickerModule, MdNativeDateModule,
// DateValueAccessorModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [  AuthGuard, AuthService, 
  // DateValueAccessor ,
  PagerService , PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
