import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilrComponent } from './profilr/profilr.component';
import { EmailComponent } from './email/email.component';



@NgModule({
  declarations: [ProfilrComponent, EmailComponent],
  imports: [
    CommonModule
  ],
  exports:[ProfilrComponent,EmailComponent]
})
export class DashboardModule { }
