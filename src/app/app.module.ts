import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from '../app/nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HighlightDirective} from './custom-directives/highlight-directive';
import { CustomifDirective } from './custom-directives/customif/customif.directive';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import {MultiplerPipe} from './pipes/multiplier.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    CategoryComponent,
    HighlightDirective,
    CustomifDirective,
    PipesexampleComponent,
    MultiplerPipe,
    ParentComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
