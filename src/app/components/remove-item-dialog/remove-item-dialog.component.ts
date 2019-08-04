import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-item-dialog',
  templateUrl: './remove-item-dialog.component.html',
  styleUrls: ['./remove-item-dialog.component.scss']
})
export class RemoveItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveItemDialogComponent>) {
  }

  ngOnInit() {
  }

  onAgreeClick() {
    this.dialogRef.close(true);
  }

}
