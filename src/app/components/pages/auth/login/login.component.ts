import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

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

  }

}
