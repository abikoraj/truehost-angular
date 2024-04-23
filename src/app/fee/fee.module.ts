import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeRoutingModule } from './fee-routing.module';
import { DuelistComponent } from './duelist/duelist.component';


@NgModule({
  declarations: [
    DuelistComponent
  ],
  imports: [
    CommonModule,
    FeeRoutingModule
  ]
})
export class FeeModule { }
