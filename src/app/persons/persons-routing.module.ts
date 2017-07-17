import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PersonsComponent } from './persons.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AddPersonComponent } from './add-person/add-person.component';

const personsRoutes: Routes = [
  {
    path: '',
    component: PersonsComponent,
    children: [
      {
        path: 'list',
        component: PersonListComponent,
        children: [
          {
            path: ':id',
            component: PersonDetailComponent,
          }
        ]
      },
      {
        path: 'add',
        component: AddPersonComponent,
      }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(personsRoutes)
  ],
  exports: [RouterModule],
})
export class PersonsRoutingModule { }
