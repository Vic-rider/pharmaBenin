import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/components/core/services/snackbar.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
  })
  export class ForgotPasswordComponent implements OnInit {

  email = '';
  load = false;
  done = false;

  //@ts-ignore
  isOnPhoneWidth: boolean;

  constructor(
    private router: Router,
    private snackBarService: SnackbarService,
    private cdr: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver,
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

    this.load = true;

    // this.authService.forgot_password(this.email).subscribe(
    //   (res:any) => {
    //     if(res.success) {
    //       this.done = true;
    //     }
    //   },
    //   (err:any) => {
    //     this.snackBarService.loadSnackUndo('Une erreur est survenue, veuillez réessayer', 'x', 3000, 'warn')
    //   },
    //   () => {
    //     this.load = false;
    //   }
    // )

  }

}
