import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

const routes: Routes = [
  {
    path: 'vendor_list',
    component: VendorlistComponent
  },
  {
    path: 'stock_history',
    component: StockhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
