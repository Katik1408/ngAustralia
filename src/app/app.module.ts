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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    CategoryComponent,
    HighlightDirective,
    CustomifDirective,
    PipesexampleComponent,
    MultiplerPipe
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
