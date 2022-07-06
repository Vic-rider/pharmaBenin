import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/components/core/models/user';
import { AuthService } from 'src/app/components/core/services/auth.service';
import { SnackbarService } from 'src/app/components/core/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    hide = true;
    user = new User()
    load = false;
    registerDone = false;

    gender_balise = false;
    country_balise = false;

    confirmPAssword = ''

    //@ts-ignore
    isOnPhoneWidth: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private snackBarService: SnackbarService,
    public breakpointObserver: BreakpointObserver,
      private router: Router
  ) { }

  ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 900px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isOnPhoneWidth = false;
        // console.log('Viewport width is 600px or greater!');
      } else {
        this.isOnPhoneWidth = true;
        // console.log('Viewport width is less than 600px!');
      }

      this.cdr.markForCheck()
    });

  }

  submit() {

    if(!this.user.username) {
      this.snackBarService.loadSnackUndo('Veuillez rentrer votre Nom d\'utilisateur', 'x', 3000, 'warn')
      return;
    }

    if(!this.user.email) {
      this.snackBarService.loadSnackUndo('Veuillez rentrer votre Email', 'x', 3000, 'warn')
      return;
    }

    if(!this.user.password) {
      this.snackBarService.loadSnackUndo('Veuillez rentrer votre Mot de passe', 'x', 3000, 'warn')
      return;
    }

    this.load = true;

    this.authService.register(this.user).subscribe(
        (res:any) => {
            // console.log(res);
            this.router.navigateByUrl('/auth/login');
        },
        (err:any) => {

        },
        () => {

        }
    )

  }

}
