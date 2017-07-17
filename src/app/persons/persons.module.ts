import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// import { MyDatePickerModule } from 'mydatepicker';

import { PersonsRoutingModule } from './persons-routing.module';

import { PersonsComponent } from './persons.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AddPersonComponent } from './add-person/add-person.component';

// import { PersonService } from '../services/person.service';

// // Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from '../services/in-memory-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
        // MyDatePickerModule,
    PersonsRoutingModule
  ],
  declarations: [
    PersonsComponent,
    PersonListComponent,
    PersonDetailComponent,
    AddPersonComponent,
  ],
  // providers: [PersonService]

})
export class PersonsModule { }
