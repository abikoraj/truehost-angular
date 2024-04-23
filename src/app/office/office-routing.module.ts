import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';
import { DepositlistComponent } from './depositlist/depositlist.component';
import { ExpenselistComponent } from './expenselist/expenselist.component';

const routes: Routes = [
  {
    path: '',
    component: AccountlistComponent
  },
  {
    path: 'deposite_list',
    component: DepositlistComponent
  },
  {
    path: 'expense_list',
    component: ExpenselistComponent
  },
  {
    path: 'all_transaction',
    component: AlltransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
