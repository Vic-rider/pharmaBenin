import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/core/models/user';

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

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

}
