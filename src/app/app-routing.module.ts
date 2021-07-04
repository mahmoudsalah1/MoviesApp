import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { CustomersComponent } from './customers/customers.component';
import { EmailComponent } from './dashboard/email/email.component';
import { LogformComponent } from './logform/logform.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MovieComponent } from './movie/movie.component';
import { MymovieComponent } from './movie/mymovie/mymovie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"",component:MovieComponent},
  {path:"movie/:id",component:MymovieComponent},
  {path:"customers",component:CustomersComponent ,canActivate: [AuthGaurdGuard]},
  {path:"email",component:EmailComponent},
  {path:"loginpage",component:LoginpageComponent},
  {path:"loginform",component:LogformComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
