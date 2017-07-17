import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavRoutingModule } from './main-nav-routing.module';
import { MainNavComponent } from './main-nav.component';


@NgModule({
  imports: [
    CommonModule,
    MainNavRoutingModule
  ],
  declarations: [MainNavComponent],
  
})
export class MainNavModule { }
