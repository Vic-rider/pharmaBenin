import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '../../layouts/layouts.module';

import { MaterialModule } from '../../core/modules/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    MatAutocompleteModule,
    RouterModule.forChild(
        [
            {
                path: '',
                component: AuthComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: LoginComponent
                    },
                    {
                        path: 'register',
                        component: RegisterComponent
                    },
                    {
                        path: 'forgot-password',
                        component: ForgotPasswordComponent
                    }
                ]
            }
        ]
    )
  ],
  declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent
    ]
})
export class AuthModule { }
