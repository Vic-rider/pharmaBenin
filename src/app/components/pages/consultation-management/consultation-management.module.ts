import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationManagementComponent } from './consultation-management.component';
import { ConsultDoctorsListComponent } from './doctors-management/consult-doctors-list/consult-doctors-list.component';
import { ConsultDoctorsOneComponent } from './doctors-management/consult-doctors-one/consult-doctors-one.component';
import { ConsultMinesListComponent } from './consult-mines-list/consult-mines-list.component';
import { ConsultNewComponent } from './consult-new/consult-new.component';
import { RouterModule } from '@angular/router';
import { ConsultDoctorFavoritesComponent } from './doctors-management/consult-doctor-favorites/consult-doctor-favorites.component';
import { LayoutsModule } from '../../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule.forChild(
        [
            {
                path: '',
                component: ConsultationManagementComponent,
                children: [
                    {
                        path: '',
                        component: ConsultDoctorsListComponent
                    },
                    {
                        path: 'doctors',
                        children: [
                            {
                                path: ':doctor_id',
                                component: ConsultDoctorsOneComponent,
                            },
                        ]
                    },
                ]
            }
        ]
    )
  ],
  declarations: [
      ConsultationManagementComponent,
      ConsultDoctorsListComponent,
      ConsultDoctorsOneComponent,
      ConsultDoctorFavoritesComponent,
      ConsultMinesListComponent,
      ConsultNewComponent
    ]
})
export class ConsultationManagementModule { }
