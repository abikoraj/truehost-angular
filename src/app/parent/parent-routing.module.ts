import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentlistComponent } from './parentlist/parentlist.component';


const routes: Routes = [
  {
    path: '',
    component: ParentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
