import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { medocs } from 'src/app/components/core/consts/medocs';
import { environment } from 'src/environments/environment';

interface Medoc {
    name: string;
    type: string;
    price: string;
    quantity: number;
    pic: string;
}

@Component({
  selector: 'app-order-medicine-to-pharma',
  templateUrl: './order-medicine-to-pharma.component.html',
  styleUrls: ['./order-medicine-to-pharma.component.scss']
})
export class OrderMedicineToPharmaComponent implements OnInit {

  load = false;
  order: any;
  medocs = medocs;
  orderingDone = false;
  orderNumber = '';

  toppings = new FormControl('');
  selectedMedocs: Array<Medoc> = [];

  toppingList: string[] = ['UPSA-C', 'Vitabact', 'Deslora Denk', 'Nasacort', 'Esbatine'];

  userData = JSON.parse(localStorage.getItem(environment.PB_userData));

  constructor(
    public dialogRef: MatDialogRef<OrderMedicineToPharmaComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  submit() {

    this.load = true;

    setTimeout(() => {

        this.orderingDone = true;

    }, 3000);

  }

  getTotal() {

    let total = 0;

    for(const medoc of this.selectedMedocs) {
        //@ts-ignore
        const medocallcount = medoc.price * medoc.quantity;
        total = total + medocallcount;
    }

    return total;


  }

}
