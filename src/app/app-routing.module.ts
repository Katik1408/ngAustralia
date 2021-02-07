import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'login',
    component:NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Path --- category
//Component -- CategoryComponent
