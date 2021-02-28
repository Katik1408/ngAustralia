import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../app/nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './custom-directives/highlight-directive';
import { CustomifDirective } from './custom-directives/customif/customif.directive';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { MultiplerPipe } from './pipes/multiplier.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { StudentdetailsComponent } from './crud/studentdetails/studentdetails.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatestudentComponent } from './crud/createstudent/createstudent.component';
import { EditstudentdetailsComponent } from './crud/editstudentdetails/editstudentdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ErrorinterceptorService } from 'src/app/services/error/errorinterceptor.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';

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
    SiblingComponent,
    StudentdetailsComponent,
    CreatestudentComponent,
    EditstudentdetailsComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorinterceptorService,
      multi: true,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
