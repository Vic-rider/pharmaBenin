import { Component, OnInit } from '@angular/core';
import { medocs } from 'src/app/components/core/consts/medocs';

@Component({
  selector: 'app-pharma-one-drugs-list',
  templateUrl: './pharma-one-drugs-list.component.html',
  styleUrls: ['./pharma-one-drugs-list.component.scss']
})
export class PharmaOneDrugsListComponent implements OnInit {

    tabs = 'anticontitutionellement.'.split('');

    medocs = medocs;

    constructor() { }

    ngOnInit(): void {
    }

}
