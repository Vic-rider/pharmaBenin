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

  orderCode = '';

  toppingList: string[] = ['UPSA-C', 'Vitabact', 'Deslora Denk', 'Nasacort', 'Esbatine'];

  userData = JSON.parse(localStorage.getItem(environment.PB_userData));
  files: any;

  constructor(
    public dialogRef: MatDialogRef<OrderMedicineToPharmaComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  fileEvent(event) {
      console.log(event.target.files)
      this.files = event.target.files
  }

  lauchFileInput() {
    document.getElementById('file_input').click();
  }

  submit() {

    this.load = true;

    setTimeout(() => {

        this.orderingDone = true;

        this.orderCode = `PB-${this.randomIntFromInterval(5000, 99999)}-F8R`

    }, 3000);

  }

  randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
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
