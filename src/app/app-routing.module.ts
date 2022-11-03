import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
