import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationManagementComponent } from './consultation-management.component';
import { ConsultDoctorsListComponent } from './consult-doctors-list/consult-doctors-list.component';
import { ConsultDoctorsOneComponent } from './consult-doctors-one/consult-doctors-one.component';
import { ConsultMinesListComponent } from './consult-mines-list/consult-mines-list.component';
import { ConsultNewComponent } from './consult-new/consult-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsultationManagementComponent, ConsultDoctorsListComponent, ConsultDoctorsOneComponent, ConsultMinesListComponent, ConsultNewComponent]
})
export class ConsultationManagementModule { }
