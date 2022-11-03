import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksMasterComponent } from './books-master/books-master.component';

const routes: Routes = [
  { path: '', component: BooksMasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
