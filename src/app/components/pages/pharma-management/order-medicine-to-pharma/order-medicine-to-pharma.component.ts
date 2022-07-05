import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { medocs } from 'src/app/components/core/consts/medocs';

@Component({
  selector: 'app-order-medicine-to-pharma',
  templateUrl: './order-medicine-to-pharma.component.html',
  styleUrls: ['./order-medicine-to-pharma.component.scss']
})
export class OrderMedicineToPharmaComponent implements OnInit {

  load = false;
  order: any;
  medocs = medocs;

  toppings = new FormControl('');

  toppingList: string[] = ['UPSA-C', 'Vitabact', 'Deslora Denk', 'Nasacort', 'Esbatine'];

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

}
