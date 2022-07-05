import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PharmaService } from 'src/app/components/core/services/pharma.service';
import { OrderMedicineToPharmaComponent } from '../order-medicine-to-pharma/order-medicine-to-pharma.component';

@Component({
  selector: 'app-pharma-one',
  templateUrl: './pharma-one.component.html',
  styleUrls: ['./pharma-one.component.scss']
})
export class PharmaOneComponent implements OnInit {

  tabs = 'anticontitutionellement.'.split('');
  pharma: any;

  constructor(
      private pharmaServices: PharmaService,
      public dialog: MatDialog,
      private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
        (res:any) => {

            this.pharmaServices.getPharmaById(res.pharma_id).subscribe(
                (res:any) => {
                    console.log(res);
                    this.pharma = res.data;
                },
                (err:any) => {

                },
                () => {

                }
            )

        }
    )

  }

  openOrderForm() {

    const dialogRef = this.dialog.open(OrderMedicineToPharmaComponent, {
        width: "600px",
        data: this.pharma
    });

    dialogRef.afterClosed().subscribe(res => {
        this.ngOnInit();
    });

  }

}
