import { Component, OnInit } from '@angular/core';
import { doctors } from 'src/app/components/core/consts/medocs';

@Component({
  selector: 'app-consult-doctors-list',
  templateUrl: './consult-doctors-list.component.html',
  styleUrls: ['./consult-doctors-list.component.scss']
})
export class ConsultDoctorsListComponent implements OnInit {

  tabs = 'anticontitutionellement.'.split('');
  doctors = doctors;

  constructor() { }

  ngOnInit(): void {
  }

}
