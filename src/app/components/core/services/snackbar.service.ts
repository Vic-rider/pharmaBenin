import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snack_class = {
    success: 'green-snackbar',
    warn: 'warn-snackbar',
    danger: 'red-snackbar'
  }

  constructor(
    private _snackBar: MatSnackBar) { }

  loadSnack(msg:string, closeMsg:string, duration:number) {
    this._snackBar.open(msg, closeMsg, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  loadSnackUndo(msg:string, closeMsg:string, duration:number, color:string) {
    this._snackBar.open(msg, closeMsg, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: duration,
      //@ts-ignore
      panelClass: this.snack_class[color]
    });
  }

}
