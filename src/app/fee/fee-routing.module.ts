import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuelistComponent } from './duelist/duelist.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';

const routes: Routes = [
  {
    path: 'invoice_list',
    component: InvoicelistComponent
  },
  {
    path: 'due_list',
    component: DuelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeRoutingModule { }
