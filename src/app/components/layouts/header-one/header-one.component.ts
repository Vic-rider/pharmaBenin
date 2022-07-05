import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  userData = JSON.parse(localStorage.getItem(environment.PB_userData));

  constructor(
      private authServices: AuthService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
      this.authServices.logOut()
  }

}
