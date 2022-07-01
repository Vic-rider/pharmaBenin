import { Component, OnInit } from '@angular/core';
import { doctors, medocs } from '../../core/consts/medocs';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    medocs = medocs;
    doctors = doctors;

    constructor() { }

    ngOnInit(): void {
    }

}
