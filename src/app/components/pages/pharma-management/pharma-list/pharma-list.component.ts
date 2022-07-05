import { Component, OnInit } from '@angular/core';
import { PharmaService } from 'src/app/components/core/services/pharma.service';

@Component({
  selector: 'app-pharma-list',
  templateUrl: './pharma-list.component.html',
  styleUrls: ['./pharma-list.component.scss']
})
export class PharmaListComponent implements OnInit {

    tabs = 'anticontitutionellement.'.split('');
    pharmaList = [];

    constructor(
        private pharmaServices: PharmaService
    ) { }

    ngOnInit(): void {

        this.pharmaServices.getPharmaList().subscribe(
            (res:any) => {
                this.pharmaList = res.data
                console.log(this.pharmaList )
            },
            (err:any) => {

            },
            () => {

            }
        )

    }

}
