import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {
    path: 'book_list',
    component: BooklistComponent
  },
  {
    path: 'book_category',
    component: BookcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
