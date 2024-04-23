import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { DepositlistComponent } from './depositlist/depositlist.component';
import { ExpenselistComponent } from './expenselist/expenselist.component';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';


@NgModule({
  declarations: [
    DepositlistComponent,
    ExpenselistComponent,
    AlltransactionComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
