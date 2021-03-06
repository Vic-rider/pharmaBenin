import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaManagementComponent } from './pharma-management.component';
import { PharmaListComponent } from './pharma-list/pharma-list.component';
import { PharmaOneComponent } from './pharma-one/pharma-one.component';
import { PharmaOneDrugsListComponent } from './pharma-one-drugs-list/pharma-one-drugs-list.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../../layouts/layouts.module';
import { PharmaOneDrugsDetailsComponent } from './pharma-one-drugs-details/pharma-one-drugs-details.component';
import { OrderMedicineToPharmaComponent } from './order-medicine-to-pharma/order-medicine-to-pharma.component';

//material modules
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialModule } from '../../core/modules/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,

    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,
    FormsModule, MatIconModule,MatDialogModule,
    ReactiveFormsModule,
    MaterialModule,

    RouterModule.forChild(
        [
            {
                path: '',
                component: PharmaManagementComponent,
                children: [
                    {
                        path: '',
                        component: PharmaListComponent
                    },
                    {
                        path: ':pharma_id',
                        component: PharmaOneComponent,
                    },
                    {
                        path: ':pharma_id/drugs',
                        component: PharmaOneDrugsListComponent
                    },
                    {
                        path: ':pharma_id/drugs/:drug_id',
                        component: PharmaOneDrugsDetailsComponent
                    }
                ]
            }
        ]
    )
  ],
  declarations: [
      PharmaManagementComponent, PharmaListComponent,
      PharmaOneComponent, PharmaOneDrugsListComponent,
      PharmaOneDrugsDetailsComponent, OrderMedicineToPharmaComponent
  ]
})
export class PharmaManagementModule { }
