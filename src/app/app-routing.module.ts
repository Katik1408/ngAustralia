import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { ParentComponent } from './parent/parent.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'login',
    component: NavComponent,
  },
  {
    path:'pipes',
    component:PipesexampleComponent
  },{
    path:'parent',
    component:ParentComponent
  },{
    path:'sibling',
    component:SiblingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//Path --- category
//Component -- CategoryComponent
