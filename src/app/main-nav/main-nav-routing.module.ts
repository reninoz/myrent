import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainNavComponent } from './main-nav.component';

import { AuthGuard } from '../guards/auth.guard';

const mainNavRoutes : Routes = [
  {
    path: '',
    component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'persons',
        loadChildren: 'app/persons/persons.module#PersonsModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainNavRoutes)
  ],
  exports: [RouterModule]
})
export class MainNavRoutingModule { }
