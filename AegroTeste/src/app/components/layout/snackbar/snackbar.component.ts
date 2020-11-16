import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open('Cadastrado com sucesso!', 'Ok!', {
      duration: 5000
    });
  }

  ngOnInit(): void {
  }

}
