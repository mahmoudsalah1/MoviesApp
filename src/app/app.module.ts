import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovieComponent } from './movie/movie.component';
import { CustomersComponent } from './customers/customers.component';
import { MymovieComponent } from './movie/mymovie/mymovie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogformComponent } from './logform/logform.component';
import { StarRatingModule } from 'angular-rating-star';
import { HttpClientModule } from'@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieComponent,
    CustomersComponent,
    MymovieComponent,
    PageNotFoundComponent,
    LoginpageComponent,
    LogformComponent,
    UserlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
