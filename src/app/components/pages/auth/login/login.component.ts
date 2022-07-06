import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/core/services/auth.service';
import { SnackbarService } from 'src/app/components/core/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  load = false;
  user = {
      email: '',
      password: ''
  };

  //@ts-ignore
  isOnPhoneWidth: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private snackBarService: SnackbarService,
    public breakpointObserver: BreakpointObserver,) { }

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

    if(!this.user.email) {
      this.snackBarService.loadSnackUndo('Veuillez rentrer votre Email', 'x', 3000, 'warn')
      return;
    }

    if(!this.user.password) {
      this.snackBarService.loadSnackUndo('Veuillez rentrer votre Mot de passe', 'x', 3000, 'warn')
      return;
    }

    this.load = true;

    this.authService.login(this.user.email, this.user.password).subscribe(
        (res:any) => {
            console.log(res);
            this.authService.setToken(res.jwt);
            this.authService.setUserDatas(res.user);
            location.reload();
        },
        (err:any) => {

        },
        () => {

        }
    )

  }

}
