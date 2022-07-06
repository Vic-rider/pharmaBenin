import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  userData = JSON.parse(localStorage.getItem(environment.PB_userData));

  //@ts-ignore
  isOnPhoneWidth: boolean;

  constructor(
      private cdr: ChangeDetectorRef,
      private authService: AuthService,
      public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {

    this.breakpointObserver
    .observe(['(min-width: 767px)'])
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

  logOut() {
      this.authService.logOut()
  }

}
