import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstlazyComponent } from './firstlazy/firstlazy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'firstlazy',
    component: FirstlazyComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [FirstlazyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
