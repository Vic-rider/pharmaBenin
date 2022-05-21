import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharma-list',
  templateUrl: './pharma-list.component.html',
  styleUrls: ['./pharma-list.component.scss']
})
export class PharmaListComponent implements OnInit {

    tabs = 'anticontitutionellement.'.split('');

  constructor() { }

  ngOnInit(): void {
  }

}
